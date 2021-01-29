import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class HomeController {
    @RequestMapping("/")
    class HomeController {
        fun index(): String {
            return "index"
        }
    }
}

