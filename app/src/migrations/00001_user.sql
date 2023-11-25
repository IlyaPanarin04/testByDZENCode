CREATE TABLE users
(
    id       UUID DEFAULT gen_random_uuid() PRIMARY KEY NOT NULL,
    username TEXT UNIQUE                                NOT NULL,
    password TEXT                                       NOT NULL,
    email    TEXT                                       NOT NULL
);