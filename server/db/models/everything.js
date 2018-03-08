const db = require('../db.js');



// -- ---
// -- Globals
// -- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

// -- ---
// -- Table 'students'
// -- 
// -- ---

DROP TABLE IF EXISTS `students`;
		
CREATE TABLE `students` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(55) NULL DEFAULT NULL,
  `school` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

// -- ---
// -- Table 'classes'
// -- 
// -- ---

DROP TABLE IF EXISTS `classes`;
		
CREATE TABLE `classes` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  `lecture_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

// -- ---
// -- Table 'teachers'
// -- 
// -- ---

DROP TABLE IF EXISTS `teachers`;
		
CREATE TABLE `teachers` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(55) NULL DEFAULT NULL,
  `class_id` INTEGER NULL DEFAULT NULL,
  `school_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

// -- ---
// -- Table 'teachers_students'
// -- 
// -- ---

DROP TABLE IF EXISTS `teachers_students`;
		
CREATE TABLE `teachers_students` (
  `teacher_id` INTEGER NULL DEFAULT NULL,
  `student_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`teacher_id`)
);

// -- ---
// -- Table 'schools'
// -- 
// -- ---

DROP TABLE IF EXISTS `schools`;
		
CREATE TABLE `schools` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

// -- ---
// -- Table 'topics'
// -- 
// -- ---

DROP TABLE IF EXISTS `topics`;
		
CREATE TABLE `topics` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` INTEGER NULL DEFAULT NULL,
  `student_id` INTEGER NULL DEFAULT NULL,
  `quiz_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

// -- ---
// -- Table 'student_classes'
// -- 
// -- ---

DROP TABLE IF EXISTS `student_classes`;
		
CREATE TABLE `student_classes` (
  `student_id` INTEGER NULL DEFAULT NULL,
  `classes_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`student_id`)
);

// -- ---
// -- Table 'lectures'
// -- 
// -- ---

DROP TABLE IF EXISTS `lectures`;
		
CREATE TABLE `lectures` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` INTEGER NULL DEFAULT NULL,
  `topic_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

// -- ---
// -- Table 'quizzes'
// -- 
// -- ---

DROP TABLE IF EXISTS `quizzes`;
		
CREATE TABLE `quizzes` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `grade` INTEGER NULL DEFAULT NULL,
  `new field` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

// -- ---
// -- Table 'students_quizzes'
// -- 
// -- ---

DROP TABLE IF EXISTS `students_quizzes`;
		
CREATE TABLE `students_quizzes` (
  `student_id` INTEGER NULL DEFAULT NULL,
  `quiz_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`student_id`)
);

// -- ---
// -- Foreign Keys 
// -- ---

ALTER TABLE `students` ADD FOREIGN KEY (school) REFERENCES `schools` (`id`);
ALTER TABLE `classes` ADD FOREIGN KEY (lecture_id) REFERENCES `lectures` (`id`);
ALTER TABLE `teachers` ADD FOREIGN KEY (class_id) REFERENCES `classes` (`id`);
ALTER TABLE `teachers` ADD FOREIGN KEY (school_id) REFERENCES `schools` (`id`);
ALTER TABLE `teachers_students` ADD FOREIGN KEY (teacher_id) REFERENCES `teachers` (`id`);
ALTER TABLE `teachers_students` ADD FOREIGN KEY (student_id) REFERENCES `students` (`id`);
ALTER TABLE `topics` ADD FOREIGN KEY (student_id) REFERENCES `students` (`id`);
ALTER TABLE `topics` ADD FOREIGN KEY (quiz_id) REFERENCES `quizzes` (`id`);
ALTER TABLE `student_classes` ADD FOREIGN KEY (student_id) REFERENCES `students` (`id`);
ALTER TABLE `student_classes` ADD FOREIGN KEY (classes_id) REFERENCES `classes` (`id`);
ALTER TABLE `lectures` ADD FOREIGN KEY (topic_id) REFERENCES `topics` (`id`);
ALTER TABLE `students_quizzes` ADD FOREIGN KEY (student_id) REFERENCES `students` (`id`);
ALTER TABLE `students_quizzes` ADD FOREIGN KEY (quiz_id) REFERENCES `quizzes` (`id`);

// -- ---
// -- Table Properties
// -- ---

-- ALTER TABLE `students` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `classes` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `teachers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `teachers_students` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `schools` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `topics` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `student_classes` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `lectures` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `quizzes` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `students_quizzes` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

// -- ---
// -- Test Data
// -- ---

-- INSERT INTO `students` (`id`,`name`,`school`) VALUES
-- ('','','');
-- INSERT INTO `classes` (`id`,`name`,`lecture_id`) VALUES
-- ('','','');
-- INSERT INTO `teachers` (`id`,`name`,`class_id`,`school_id`) VALUES
-- ('','','','');
-- INSERT INTO `teachers_students` (`teacher_id`,`student_id`) VALUES
-- ('','');
-- INSERT INTO `schools` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `topics` (`id`,`name`,`student_id`,`quiz_id`) VALUES
-- ('','','','');
-- INSERT INTO `student_classes` (`student_id`,`classes_id`) VALUES
-- ('','');
-- INSERT INTO `lectures` (`id`,`name`,`topic_id`) VALUES
-- ('','','');
-- INSERT INTO `quizzes` (`id`,`grade`,`new field`) VALUES
-- ('','','');
-- INSERT INTO `students_quizzes` (`student_id`,`quiz_id`) VALUES
-- ('','');