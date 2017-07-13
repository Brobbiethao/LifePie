SELECT sum( (social, work, sleep, development) - (168)
FROM qualityoflife
where id = $1;
