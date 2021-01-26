package net.mybluemix.lancerapp.blue6

import net.mybluemix.lancerapp.blue6.Blue6
import net.mybluemix.lancerapp.blue6.Blue6Repository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Component

//@Component
//class DatabaseLoader @Autowired constructor(private val repository: Blue6Repository) : CommandLineRunner {
//
//
//    @Throws(Exception::class)
//    override fun run(vararg strings: String?) {
//        repository.save(Blue6(reportingDateInput = "211726JAN2021", callSignInput = "Blackwatch 36", spDateInput = "211730JAN2021", rpInput = "211800JAN2021",
//                locInput = "10TET12345678", etaInput = "1 hour", siInput = "Green", narInput = "Fly Eagles Fly", pocInput = "717-897-6543"))
//    }
//
//
//}

@Configuration
internal class LoadDatabase {
    @Bean
    fun initDatabase(repository: Blue6Repository): CommandLineRunner {
        return CommandLineRunner { args: Array<String?>? ->
            repository.save(Blue6(reportingDateInput = "211726JAN2021", callSignInput = "Blackwatch 36", spDateInput = "211730JAN2021", rpInput = "211800JAN2021",
                    locInput = "10TET12345678", etaInput = "1 hour", siInput = "Green", narInput = "Fly Eagles Fly", pocInput = "717-897-6543"))
        }
    }


}




//val reportingDateInput: String = "",
//        val callSignInput: String = "",
//        val spDateInput: String = "",
//        val rpInput: String = "",
//        val locInput: String = "",
//        val etaInput: String = "",
//        val siInput: String = "",
//        val narInput: String = "",
//        val pocInput: String = ""