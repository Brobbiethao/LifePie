INSERT INTO userdata (profilename, age, gender, password, image)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;
