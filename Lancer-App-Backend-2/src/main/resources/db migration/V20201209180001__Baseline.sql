
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

create table tasks_to_subtasks
(
    id         SERIAL PRIMARY KEY,
    subtask_id BIGINT not null,
    parent_id  BIGINT not null
);

create table task_assignment
(
    task_id BIGINT NOT NULL,
    profile_id BIGINT NOT NULL,
    FOREIGN KEY (task_id) references task,
    FOREIGN KEY (profile_id) references profile,
    UNIQUE (task_id, profile_id)
);
