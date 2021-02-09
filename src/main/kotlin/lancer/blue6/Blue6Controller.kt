package lancer.blue6

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class Blue6HomeController {
    @RequestMapping("/")
    class Blue6HomeController {
        fun index(): String {
            return "index"
        }
    }
}

