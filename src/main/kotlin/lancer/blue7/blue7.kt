package lancer.blue7

import java.io.Serializable
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
data class Blue7(
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Id
        val Id: Long=0,
        val checkOutReportingDateInput: String = "",
        val checkOutCallSignInput: String = "",
        val checkOutRpDateInput: String = "",
        val checkOutLocInput: String = "",
        val accidentInput: String = "",
        val checkOutEtaInput: String = "",
        val checkOutSiInput: String = ""


) : Serializable {}
