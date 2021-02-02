package net.mybluemix.lancerapp.blue6

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import java.io.Serializable

@Entity
data class Blue6(
        @GeneratedValue(strategy = GenerationType.AUTO)
        @Id
        val Id: Long=0,
        val reportingDateInput: String = "",
        val callSignInput: String = "",
        val spDateInput: String = "",
        val rpInput: String = "",
        val locInput: String = "",
        val etaInput: String = "",
        val siInput: String = "",
        val narInput: String = "",
        val pocInput: String = ""

): Serializable {}



//@Entity
//@EntityListeners(AuditingEntityListener::class)
//data class Blue6(
//        @GeneratedValue(strategy = GenerationType.AUTO)
//        @Id
//        val reportingDateInput: String = "",
//        val callSignInput: String = "",
//        val spDateInput: String = "",
//        val rpInput: String = "",
//        val locInput: String = "",
//        val etaInput: String = "",
//        val siInput: String = "",
//        val narInput: String = "",
//        val pocInput: String = ""
//
//) : Serializable {}




