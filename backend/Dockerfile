FROM maven:3.9-amazoncorretto-21 AS build

WORKDIR /app
COPY . .
RUN mvn -f backend/pom.xml -Pprod -DskipTests package

FROM amazoncorretto:21-alpine

WORKDIR /app
COPY --from=build /app/backend/target/*.jar /app/protube-back.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/protube-back.jar"]
