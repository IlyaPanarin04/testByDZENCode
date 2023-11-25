CREATE TABLE comments
(
    id                UUID      DEFAULT gen_random_uuid() PRIMARY KEY NOT NULL,
    user_id           UUID                                            NOT NULL,
    text              TEXT,
    created_at        TIMESTAMP DEFAULT NOW(),
    reply_comments_id UUID,
    image_url         TEXT,
    file_url          TEXT
);