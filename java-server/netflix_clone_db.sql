DROP DATABASE IF EXISTS netflixclonedb;
DROP USER IF EXISTS netflixcloneuser;
CREATE USER netflixcloneuser with password 'password';
CREATE DATABASE netflixclonedb with template=template0 owner=netflixcloneuser;
\connect netflixclonedb;
alter default privileges grant all on tables to netflixcloneuser;

CREATE TABLE role(
                     role_id serial PRIMARY KEY,
                     role_name varchar(10) NOT NULL
);

INSERT INTO role (role_name) VALUES ('admin');
INSERT INTO role (role_name) VALUES ('user');

CREATE TABLE users(
                      user_id serial PRIMARY KEY,
                      username varchar(45) UNIQUE,
                      password text NOT NULL,
                      role_id int REFERENCES role (role_id)
);

CREATE TABLE movies(
                       movie_id serial PRIMARY KEY,
                       movie_title varchar(250) NOT NULL,
                       added DATE NOT NULL,
                       mongodb_movie_id varchar(150) NOT NULL
);

CREATE TABLE seenMovie(
                          seenMovie_id serial PRIMARY KEY,
                          user_id int REFERENCES users (user_id) ON UPDATE CASCADE ON DELETE CASCADE,
                          movie_id int REFERENCES movies (movie_id) ON UPDATE CASCADE ON DELETE CASCADE,
                          seenMovie_date DATE NOT NULL
);

CREATE TABLE contacts(
                         contact_id serial PRIMARY KEY,
                         first_name varchar(255),
                         last_name varchar(355),
                         date_of_birth DATE,
                         gender varchar(6),
                         contact_email varchar(150) NOT NULL,
                         user_id int REFERENCES users (user_id),
                         UNIQUE(contact_email)
);

CREATE TABLE address(
                        address_id serial PRIMARY KEY,
                        country varchar(45) NOT NULL,
                        area varchar(45) NOT NULL,
                        city varchar(45) NOT NULL,
                        street varchar(150) NOT NULL,
                        address_number varchar(45) NOT NULL,
                        contact_id int REFERENCES contacts (contact_id)
);