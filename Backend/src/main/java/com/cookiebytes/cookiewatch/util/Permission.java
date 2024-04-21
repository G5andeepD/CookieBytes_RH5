package com.cookiebytes.cookiewatch.util;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Permission {

    ADMIN_READ("admin:read"),
    ADMIN_UPDATE("admin:update"),
    ADMIN_CREATE("admin:create"),
    ADMIN_DELETE("admin:delete"),
    USER_READ("user:read"),
    USER_UPDATE("user:update"),
    USER_CREATE("user:create"),
    USER_DELETE("user:delete"),
    DOCTOR_READ("doctor:read"),
    DOCTOR_UPDATE("doctor:update"),
    DOCTOR_CREATE("doctor:create"),
    DOCTOR_DELETE("doctor:delete"),
    PHI_READ("phi:read"),
    PHI_UPDATE("phi:update"),
    PHI_CREATE("phi:create"),
    PHI_DELETE("phi:delete"),
    CITIZEN_READ("citizen:read"),
    CITIZEN_UPDATE("citizen:update"),
    CITIZEN_CREATE("citizen:create"),
    CITIZEN_DELETE("citizen:delete"),




    ;

    private final String permission;
}

