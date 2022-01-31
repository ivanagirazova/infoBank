package mk.finki.ukim.apigateway.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping("banks")
@CrossOrigin
public class ApiGatewayController {

    @Autowired
    private RestTemplate rest;

    @PostMapping
    public String mirrorRest(@RequestBody(required = false) String body, HttpServletRequest request)
    {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<String> entity = new HttpEntity<>(body, headers);

        return rest.postForEntity("http://navigation/banks?" + request.getQueryString(), entity, String.class).getBody();
    }

    @GetMapping("operators")
    public String getOperators() {
        return rest.getForObject("http://navigation/banks/operators", String.class);
    }

    @GetMapping("images")
    public String getImages() {
        return rest.getForObject("http://navigation/banks/images", String.class);
    }
}
