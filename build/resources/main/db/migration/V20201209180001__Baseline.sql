
CREATE TABLE blue6
(
    reportDTG          TEXT
                        TEXT
    description        TEXT
    created_date       TEXT
    last_modified_date TEXT
    deadline_date      TEXT
    completed_date     TEXT
    created_by_profile_id BIGINT    NOT null,
    FOREIGN KEY (created_by_profile_id) references profile
);

//        val reportingDateInput: String = "",
//        val callSignInput: String = "",
//        val spDateInput: String = "",
//        val rpInput: String = "",
//        val locInput: String = "",
//        val etaInput: String = "",
//        val siInput: String = "",
//        val narInput: String = "",
//        val pocInput: String = ""


