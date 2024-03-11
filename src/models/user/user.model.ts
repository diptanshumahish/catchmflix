import { Profile } from "./profile.model";

export class User {
    declare username: string;
    declare userID: string;
    declare userFullName: string;
    declare userEmail: string;
    declare userZipCode: number;
    declare userIsPremium: boolean;
    declare userMobileNumber: string;
    declare userCity?: string;
    declare userAge: number;
    declare userProfiles: Profile[];
    declare userIsLoggedIn: boolean;
    declare userReceiveUpdates: boolean;
}
