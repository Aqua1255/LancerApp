ALTER TABLE Blue6
    ADD COLUMN created_by TEXT;
UPDATE Blue6
    SET created_by = 'd280467e-71c3-4f36-a93b-90d3304d540c';
ALTER TABLE Blue6
    ALTER COLUMN created_by SET NOT NULL;



ALTER TABLE Blue7
    ADD COLUMN created_by TEXT;
UPDATE Blue7
    SET created_by = 'd280467e-71c3-4f36-a93b-90d3304d540c';
ALTER TABLE Blue7
    ALTER COLUMN created_by SET NOT NULL;
-- -- /* created By not nullable */
-- -- --     may need to alter it several times
--
--
--
--
--
--
-- --     created_by_profile_id BIGINT    NOT null,
-- --     FOREIGN KEY (created_by_profile_id) references profile
--
