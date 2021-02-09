export class RequestModel {
    launch_year: String;
    land_success: String;
    launch_success: String;
}
// export class ResponseModel {
//     flight_number: number;
//     mission_name: string;
//     mission_id: number[];
//     upcoming: boolean;
//     launch_year: string;
//     launch_date_unix: number;
//     launch_date_utc: string;
//     launch_date_local: string;
//     is_tentative: boolean;
//     tentative_max_precision: string;
//     tbd: boolean;
//     launch_window: number;
//     rocket: {
//         rocket_id: string;
//         rocket_name: string;
//         rocket_type: string;
//         first_stage: {
//             cores: Cores[];
//         };
//         second_stage: {
//             block: 1;
//             payloads: Payloads[];
//         };
//         fairings: {
//             reused: boolean;
//             recovery_attempt: boolean;
//             recovered: boolean;
//             ship: any
//         }
//     };
//     ships: any[];
//     telemetry: {
//         flight_club: any;
//     };
//     launch_site: {
//         site_id: string;
//         site_name: string;
//         site_name_long: string;
//     };
//     launch_success: boolean;
//     launch_failure_details: {
//         time: number;
//         altitude: any;
//         reason: string;
//     };
//     links: {
//         mission_patch: string;
//         mission_patch_small: string;
//         reddit_campaign: any;
//         reddit_launch: any;
//         reddit_recovery: any;
//         reddit_media: any;
//         presskit: any;
//         article_link: string;
//         wikipedia: string;
//         video_link: string;
//         youtube_id: any;
//         flickr_images: any[];
//     };
//     details: any;
//     static_fire_date_utc: any;
//     static_fire_date_unix: number;
//     timeline: {
//         webcast_liftoff: any;
//     };
//     crew: null;
// }

// export class Cores {
//     core_serial: string;
//     flight: number;
//     block: string;
//     gridfins: boolean;
//     legs: boolean;
//     reused: boolean;
//     land_success: boolean;
//     landing_intent: boolean;
//     landing_type: string;
//     landing_vehicle: string;
// }
// export class Payloads {
//     payload_id: number;
//     norad_id: any[];
//     reused: boolean;
//     customers: string[];
//     nationality: string;
//     manufacturer: string;
//     payload_type: string;
//     payload_mass_kg: number;
//     payload_mass_lbs: number;
//     orbit: string;
//     orbit_params: OrbitParams;
// }

// export class OrbitParams {
//     reference_system: string;
//     regime: string;
//     longitude: any;
//     semi_major_axis_km: any;
//     eccentricity: any;
//     periapsis_km: number;
//     apoapsis_km: number;
//     inclination_deg: number;
//     period_min: any;
//     lifespan_years: any;
//     epoch: any;
//     mean_motion: any;
//     raan: any;
//     arg_of_pericenter: any;
//     mean_anomaly: any;
// }