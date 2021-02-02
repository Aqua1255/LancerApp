import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "2.4.2"
	id("io.spring.dependency-management") version "1.0.11.RELEASE"
	kotlin("jvm") version "1.4.21"
	kotlin("plugin.spring") version "1.4.21"
	kotlin("plugin.jpa") version "1.4.21"
}

group = "Lancer-App-Backend.2"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_15

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-data-jpa")
	implementation("org.springframework.boot:spring-boot-starter-data-rest")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	developmentOnly("org.springframework.boot:spring-boot-devtools")
	implementation("org.springframework.boot:spring-boot-starter-thymeleaf")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
	runtimeOnly("com.h2database:h2")

}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "1.8"
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}


tasks.register<Exec>("installFrontend") {
	inputs.file(file("./Skeleton-Client/yarn.lock"))
	inputs.file(file("./Skeleton-Client/package.json"))
	outputs.dir(file("./Skeleton-Client/node_modules"))
	commandLine("yarn", "--cwd", "Skeleton-Client", "install")
}

tasks.register<Exec>("buildFrontend") {
	dependsOn("installFrontend")
	inputs.dir(file("./Skeleton-Client"))
	outputs.dir(file("./Skeleton-Client/build"))
	commandLine("yarn", "--cwd", "Skeleton-Client", "build")
}

tasks.register<Sync>("copyFrontend") {
	dependsOn("buildFrontend")
	from(file("./Skeleton-Client/build"))
	into(file("$buildDir/resources/main/static"))
	doLast {
		println("copied built frontend to static resources")
	}
}

tasks.register<Sync>("copyFrontendForIntelliJ") {
	dependsOn("buildFrontend")
	from(file("./Skeleton-Client/build"))
	into(file("./src/main/resources/static"))
	doLast {
		println("copied built frontend to static resources")
	}
}

tasks.withType<org.springframework.boot.gradle.tasks.bundling.BootJar> {
	dependsOn("copyFrontend")
}
tasks.withType<org.springframework.boot.gradle.tasks.run.BootRun> {
	dependsOn("copyFrontend")
}

tasks.register<Delete>("cleanFrontend") {
	delete(file("./Skeleton-Client/build"))
	delete(file("./src/main/resources/static"))
}
tasks.clean {
	dependsOn("cleanFrontend")
}
