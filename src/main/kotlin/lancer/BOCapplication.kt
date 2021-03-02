package lancer

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity

@EnableGlobalMethodSecurity(prePostEnabled = true)
@SpringBootApplication
class BOCApplication
fun main(args: Array<String>) {
    runApplication<BOCApplication>(*args)
}
//
//object ReactAndSpringDataRestApplication {
//    @kotlin.jvm.JvmStatic
//    fun main(args: Array<String>) {
//        SpringApplication.run(ReactAndSpringDataRestApplication::class.java, args)
//    }
//}