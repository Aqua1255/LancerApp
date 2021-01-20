package net.mybluemix.lancerapp.blue7

import java.io.Serializable
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import javax.persistence.*
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
@EntityListeners(AuditingEntityListener::class)
data class Blue7(
        @GeneratedValue(strategy = GenerationType.AUTO)
        @Id
        val checkOutReportingDateInput: String = "",
        val checkOutCallSignInputStream: String = "",
        val checkOutRpDateInput: String = "",
        val checkOutLocInput: String = "",
        val accidentInput: String = "",
        val checkOutEtaInput: String = "",
        val checkOutSiInput: String = ""


) : Serializable {}
