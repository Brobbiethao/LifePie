SELECT userdata.id, life.social, life.work, life.sleep
	FROM qualityoflife
    JOIN userdata on life.id = userdata.id
    RETURNING *;
