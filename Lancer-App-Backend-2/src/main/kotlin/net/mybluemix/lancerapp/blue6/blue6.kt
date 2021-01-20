package net.mybluemix.lancerapp.blue6

import java.io.Serializable
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import javax.persistence.*
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
@EntityListeners(AuditingEntityListener::class)
data class Blue6(
        @GeneratedValue(strategy = GenerationType.AUTO)
        @Id
        val reportingDateInput: String = "",
        val callSignInput: String = "",
        val spDateInput: String = "",
        val rpInput: String = "",
        val locInput: String = "",
        val etaInput: String = "",
        val siInput: String = "",
        val narInput: String = "",
        val pocInput: String = ""

) : Serializable {}




