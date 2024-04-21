package com.cookiebytes.cookiewatch.config;


import jakarta.servlet.Filter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;


import static com.cookiebytes.cookiewatch.util.Permission.*;
import static com.cookiebytes.cookiewatch.util.Role.*;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
    private final LogoutHandler logoutHandler;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors()
                .and()
                .csrf()
                .disable()
                .authorizeHttpRequests()
                .requestMatchers(

                        "/api/v1/auth/**",
                        "/api/v1/password-reset/**",
                        "/v2/api-docs",
                        "/v3/api-docs",
                        "/v3/api-docs/**",
                        "/swagger-resources",
                        "/swagger-resources/**",
                        "/configuration/ui",
                        "/configuration/security",
                        "/swagger-ui/**",
                        "/webjars/**",
                        "/swagger-ui.html",
                        "/api/v1/ml/**",
                        "/file/upload",
                        "/api/v1/admintest/**",
                        "/api/v1/doctor/**",
                        "/api/v1/emergency/**"


                )
                .permitAll()


                //What Admins Can Access
                .requestMatchers("/api/v1/admin/**").hasRole(ADMIN.name())

                 .requestMatchers(GET, "/api/v1/admin/**").
                        hasAuthority(ADMIN_READ.name())
                 .requestMatchers(POST, "/api/v1/admin/**").
                        hasAuthority(ADMIN_CREATE.name())
                 .requestMatchers(PUT, "/api/v1/admin/**").
                        hasAuthority(ADMIN_UPDATE.name())
                 .requestMatchers(DELETE, "/api/v1/admin/**").
                        hasAuthority(ADMIN_DELETE.name())



                //What Users Can Access
                .requestMatchers("/api/v1/user/**").hasAnyRole(ADMIN.name(), USER.name())
                .requestMatchers(GET, "/api/v1/user/**").hasAnyAuthority(ADMIN_READ.name(), USER_READ.name())
                .requestMatchers(POST, "/api/v1/user/**").hasAnyAuthority(ADMIN_CREATE.name(), USER_CREATE.name())
                .requestMatchers(PUT, "/api/v1/user/**").hasAnyAuthority(ADMIN_UPDATE.name(), USER_UPDATE.name())
                .requestMatchers(DELETE, "/api/v1/user/**").hasAnyAuthority(ADMIN_DELETE.name(), USER_DELETE.name())

                    //What Doctors
//                .requestMatchers("/api/v1/doctor/**").hasAnyRole(ADMIN.name(), DOCTOR.name())
//                .requestMatchers(GET, "/api/v1/doctor/**").hasAnyAuthority(ADMIN_READ.name(), DOCTOR_READ.name())
//                .requestMatchers(POST, "/api/v1/doctor/**").hasAnyAuthority(ADMIN_CREATE.name(), DOCTOR_CREATE.name())
//                .requestMatchers(PUT, "/api/v1/doctor/**").hasAnyAuthority(ADMIN_UPDATE.name(), DOCTOR_UPDATE.name())
//                .requestMatchers(DELETE, "/api/v1/doctor/**").hasAnyAuthority(ADMIN_DELETE.name(), DOCTOR_DELETE.name())




                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .logout()
                .logoutUrl("/api/v1/auth/logout")
                .addLogoutHandler(logoutHandler)
                .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext())
        ;

        return http.build();
    }
}
