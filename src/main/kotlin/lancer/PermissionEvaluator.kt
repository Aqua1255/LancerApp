package lancer

import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.security.access.PermissionEvaluator
import org.springframework.security.core.Authentication
import org.springframework.stereotype.Component
import java.io.Serializable



@Component
class AbacPermissionEvaluator : PermissionEvaluator {
    override fun hasPermission(authentication: Authentication, targetDomainObject: Any?, permission: Any): Boolean {
        logger.info("You have permission!")
        return true
    }


    override fun hasPermission(authentication: Authentication, targetId: Serializable, targetType: String, permission: Any): Boolean {
//        logger.debug("hasPersmission({}, {}, {})", user, targetDomainObject, permission)
        logger.info("You have permission!")
        return true
    }

    companion object {
        private val logger: Logger = LoggerFactory.getLogger(AbacPermissionEvaluator::class.java)
    }
}