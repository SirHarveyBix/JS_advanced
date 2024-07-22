\echo 'Delete and recreate jobly db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE IF EXISTS jobly;
CREATE DATABASE jobly;
\connect jobly

\i /API/jobly-schema.sql
\i /API/jobly-seed.sql
