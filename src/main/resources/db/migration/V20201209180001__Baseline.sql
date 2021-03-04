
CREATE TABLE Blue6
(
    id SERIAL,
    reporting_date_input TEXT,
    call_sign_input      TEXT,
    sp_date_input        TEXT,
    rp_input             TEXT,
    loc_input            TEXT,
    eta_input            TEXT,
    si_input             TEXT,
    nar_input            TEXT,
    poc_input            TEXT


);

CREATE TABLE Blue7(

     id SERIAL,
     check_out_reporting_date_input TEXT,
     check_out_call_sign_input TEXT,
     check_out_rp_date_input TEXT,
     check_out_loc_input TEXT,
     accident_input TEXT,
     check_out_eta_input TEXT,
     check_out_si_input TEXT


--     created_by_profile_id BIGINT    NOT null,
--     FOREIGN KEY (created_by_profile_id) references profile
);




