package lancer.blue7

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class Blue7HomeController {
    @RequestMapping("/")
    class Blue7HomeController {
        fun index(): String {
            return "index"
        }
    }
}