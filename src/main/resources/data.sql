
INSERT INTO USER(username,password,label) VALUES('debris404','{bcrypt}$2a$12$KJqtKVgY78xKwOw4HecNM.wb1Uvp9fGA0M38uziOqx9BuHgKrbWiG','管理员')
INSERT INTO role(rolename) VALUES('ROLE_ADMIN')
INSERT INTO role(rolename) VALUES('ROLE_USER')
INSERT INTO user_roles VALUES(1,1)

INSERT INTO dept(dname) VALUES ('工程部')
-- INSERT INTO job(jname,department_id) VALUES('java工程师','1')
INSERT INTO job(jname) VALUES('java工程师')

INSERT INTO empl(e_Name,sex,id_Number,education,phone,speciality,address,note) VALUES('张三','男',142225198907304035,'本科',18612345678,'计算机','山西太原','无')
INSERT INTO employee_job VALUES (1,1)

INSERT INTO job_department VALUES (1,1)


