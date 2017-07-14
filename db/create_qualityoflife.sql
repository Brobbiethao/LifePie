INSERT INTO qualityOfLife (social, work, sleep)
VALUES ($1, $2, $3, $4)
RETURNING *;
