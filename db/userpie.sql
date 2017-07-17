SELECT userdata.profilename, userdata.age, lifepie.social, lifepie.work, lifepie.sleep,
(lifepie.social + lifepie.work + lifepie.sleep)* 5 AS MYLIFE,
(168 - (lifepie.social + lifepie.work + lifepie.sleep)*5) AS MISC,
lifepie.work * 5 AS workweek,
lifepie.social *5 AS socialweek,
lifepie.sleep *5 AS sleepweek,
(168 -(lifepie.work * 5)) AS lifewithwork,
(168 -(lifepie.social *5)) AS lifewithsocial,
(168 -(lifepie.sleep *5)) AS lifewithsleep,
(168 -(lifepie.sleep *5)) AS lifewithmisc

FROM lifepie
JOIN userdata on lifepie.id = userdata.id
GROUP BY userdata.id, lifepie.id;
