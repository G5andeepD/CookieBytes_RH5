package com.cookiebytes.cookiewatch.util;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.cookiebytes.cookiewatch.util.Permission.*;


@Getter
@RequiredArgsConstructor
public enum Role {

    ADMIN(
            Set.of(
                    ADMIN_READ,
                    ADMIN_UPDATE,
                    ADMIN_DELETE,
                    ADMIN_CREATE,
                    USER_READ,
                    USER_UPDATE,
                    USER_DELETE,
                    USER_CREATE,
                    DOCTOR_CREATE,
                    DOCTOR_UPDATE,
                    DOCTOR_DELETE,
                    DOCTOR_READ,
                    PHI_CREATE,
                    PHI_DELETE,
                    PHI_UPDATE,
                    PHI_READ,
                    CITIZEN_CREATE,
                    CITIZEN_DELETE,
                    CITIZEN_UPDATE,
                    CITIZEN_READ

            )
    ),

    USER(
            Set.of(
                    USER_READ,
                    USER_UPDATE,
                    USER_DELETE,
                    USER_CREATE
            )
    ),
    DOCTOR(
            Set.of(
                    DOCTOR_CREATE,
                    DOCTOR_UPDATE,
                    DOCTOR_DELETE,
                    DOCTOR_READ
            )
    ),
    PHI(
            Set.of(
                    PHI_CREATE,
                    PHI_DELETE,
                    PHI_UPDATE,
                    PHI_READ
        )

    ),
    CITIZEN (
            Set.of(
                    CITIZEN_CREATE,
                    CITIZEN_DELETE,
                    CITIZEN_UPDATE,
                    CITIZEN_READ
            )
    )
    ;
    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getAuthorities() {
        var authorities = getPermissions()
                .stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toList());
        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}
