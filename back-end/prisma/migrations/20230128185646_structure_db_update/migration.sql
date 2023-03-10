/*
  Warnings:

  - You are about to drop the column `name` on the `cars` table. All the data in the column will be lost.
  - Added the required column `brand` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cars` DROP COLUMN `name`,
    ADD COLUMN `brand` VARCHAR(191) NOT NULL;

INSERT INTO users (id, name, email, password, role, updated_at) VALUES
    (uuid(), 'marcos', 'admin@verzel.com', '$2b$10$jMUzVcMZ0tjR0bACCuQ5keAeo.0p2Afm9ou5lWfrD8wi2abQZlI7O', 'admin', now()); /* 1234567890 */

INSERT INTO cars (id, model, year, mileage, price, images, status, created_at, updated_at, brand ) VALUES
  ('07c1c305-84ba-4e87-870d-e5b5f15fe500','voyage msi',2022,28087,70999,'[{\"url\": \"http://localhost:5180/images/volkswagenvoyagemsi20222808770999/EXTERIOR-back-1667942893558.jpeg\"}, {\"url\": \"http://localhost:5180/images/volkswagenvoyagemsi20222808770999/EXTERIOR-front-1667942884066.jpeg\"}, {\"url\": \"http://localhost:5180/images/volkswagenvoyagemsi20222808770999/EXTERIOR-frontSidePilotNear-1667942879953(1).jpeg\"}, {\"url\": \"http://localhost:5180/images/volkswagenvoyagemsi20222808770999/EXTERIOR-pilotSide-1667942902471.jpeg\"}]','avaliable','2023-01-28 22:12:44.236','2023-01-28 22:12:44.236','volkswagen'),
  ('2c029323-35d2-4a84-a660-9cfb75b0b943','cruze turbo',2020,28785,121699,'[{\"url\": \"http://localhost:5180/images/chevroletcruzeturbo202028785121699/EXTERIOR-back-1671222016980.jpeg\"}, {\"url\": \"http://localhost:5180/images/chevroletcruzeturbo202028785121699/EXTERIOR-front-1671221375190.jpeg\"}, {\"url\": \"http://localhost:5180/images/chevroletcruzeturbo202028785121699/EXTERIOR-frontSideCopilot-1671222052872.jpeg\"}, {\"url\": \"http://localhost:5180/images/chevroletcruzeturbo202028785121699/EXTERIOR-pilotSide-1671221497477.jpeg\"}]','avaliable','2023-01-28 22:09:41.539','2023-01-28 22:09:41.539','chevrolet'),
  ('4a0ea56b-8f64-476a-ab06-f4c398587341','firsta se',2014,87000,40999,'[{\"url\": \"http://localhost:5180/images/fordfirstase20148700040999/EXTERIOR-backSidePilot-1674152678083.jpeg\"}, {\"url\": \"http://localhost:5180/images/fordfirstase20148700040999/EXTERIOR-copilotSide-1674153111206.jpeg\"}, {\"url\": \"http://localhost:5180/images/fordfirstase20148700040999/EXTERIOR-front-1674153046554.jpeg\"}, {\"url\": \"http://localhost:5180/images/fordfirstase20148700040999/EXTERIOR-frontSidePilotDistance-1674152964676.jpeg\"}]','avaliable','2023-01-28 22:04:25.209','2023-01-28 22:04:25.209','ford'),
  ('84c4abf6-c9ed-4888-9af2-00d392697b63','etios cross',2016,61520,54899,'[{\"url\": \"http://localhost:5180/images/toyotaetioscross20166152054899/EXTERIOR-back-1667599864529.jpeg\"}, {\"url\": \"http://localhost:5180/images/toyotaetioscross20166152054899/EXTERIOR-front-1667599836908.jpeg\"}, {\"url\": \"http://localhost:5180/images/toyotaetioscross20166152054899/EXTERIOR-frontSideCopilot-1667599841358.jpeg\"}, {\"url\": \"http://localhost:5180/images/toyotaetioscross20166152054899/EXTERIOR-pilotSide-1667599873748.jpeg\"}]','avaliable','2023-01-28 22:06:58.956','2023-01-28 22:06:58.956','toyota'),
  ('f0a98ae6-063c-45eb-a887-312a80b3dfc1','eco sport',2018,42226,70099,'[{\"url\": \"http://localhost:5180/images/fordecosport20184222670099/EXTERIOR-back-1671224879141.jpeg\"}, {\"url\": \"http://localhost:5180/images/fordecosport20184222670099/EXTERIOR-front-1671224592977.jpeg\"}, {\"url\": \"http://localhost:5180/images/fordecosport20184222670099/EXTERIOR-frontSidePilotNear-1671224611098(1).jpeg\"}, {\"url\": \"http://localhost:5180/images/fordecosport20184222670099/EXTERIOR-frontSidePilotNear-1671224611098.jpeg\"}]','avaliable','2023-01-28 22:11:07.963','2023-01-28 22:11:07.963','ford');