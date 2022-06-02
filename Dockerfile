FROM openjdk:17.0.2
COPY . .
RUN ./mvnw clean install -DskipTests
ENTRYPOINT ["java", "-jar", "target/projekt-zaliczeniowy-www-0.0.1-SNAPSHOT.jar"]