package com.cookiebytes.cookiewatch;

import com.cookiebytes.cookiewatch.entity.User;
import com.cookiebytes.cookiewatch.repository.UserRepository;
import com.cookiebytes.cookiewatch.util.Role;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class CookiewatchApplication {

	public static void main(String[] args) {
		SpringApplication.run(CookiewatchApplication.class, args);
	}

//	@Bean
//	public CommandLineRunner commandLineRunner(
//											   UserRepository userRepository,
//
//											   PasswordEncoder passwordEncoder){
//		return args -> {
//
//
//
//			userRepository.save(User.builder()
//					.firstName("ADMIN")
//					.lastName("MAIN")
//					.email("admin@cookiewatch.com")
//					.password(passwordEncoder.encode("password")) // Ensure password is encoded
//					.contactNo("1234567890") // Add a contact number if required
//					.role(Role.ADMIN) // Assuming Role.ADMIN is a valid enum
//					.enabled(true) // Enable the user account
//					.build());
//
//
//
//
//
//
//
//
//
//
//		};
//	}

}
