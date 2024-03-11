export class ForgetPassword {
    declare email: string;
}
export class ForgetPasswordResponse {
    declare email: string;
    declare username: string;
}
export class Password {
    declare username: string;
    declare password: string;
    declare updated_at?: string;
}

export class Register {
    declare first_name: string;
    declare last_name: string;
    declare email: string;
    declare password: string;
}
export class Token {
    declare username: string;
    declare access_token: string;
    declare token_type?: "bearer";
}
export class UpdateUser {
    declare username: string;
    declare first_name?: string;
    declare last_name?: string;
    declare image?: string;
    declare phone?: string;
    declare statement?: string;
    declare bio?: string;
    declare education?: string;
    declare employer?: string;
    declare courts: string[];
    declare updated_at?: string;
}
export class UserResponse {
    declare first_name: string;
    declare last_name: string;
    declare username?: string;
    declare email?: string;
    declare image?: string;
    declare refer?: string;
    declare role?: Role;
    declare is_prime?: boolean;
    declare is_verified?: boolean;
    declare last_login?: string;
    declare created_at?: string;
}
export class UserDetails {
    declare first_name: string;
    declare last_name: string;
    declare username?: string;
    declare email?: string;
    declare image?: string;
    declare phone?: string;
    declare statement?: Role;
    declare bio?: string;
    declare education?: string;
    declare employer?: string;
    declare courts?: string[];
}
export class Verify {
    declare username: string;
    declare email: string;
    declare code: number;
}

export enum Role {
    User = "user",
    Partner = "partner",
    Admin = "admin",
}

//extra?
export class VerifyUser {
    declare email: string;
    declare password: string;
}
