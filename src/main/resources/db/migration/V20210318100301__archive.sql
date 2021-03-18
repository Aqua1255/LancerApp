ALTER TABLE Blue6
    ADD COLUMN archived BOOLEAN;
UPDATE Blue6
    SET archived = false;
ALTER TABLE Blue6
    ALTER COLUMN archived SET NOT NULL;



ALTER TABLE Blue7
    ADD COLUMN archived BOOLEAN;
UPDATE Blue7
    SET archived = false;
ALTER TABLE Blue7
    ALTER COLUMN archived SET NOT NULL;