package com.tecnocampus.LS2.protube_back;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ProtubeBackApplicationTests {

    @Test
    void contextLoads() {
        Double[] expected = new Double[]{2.0};

        Assert.assertArrayEquals(expected, new Double[]{2.0});
    }

}
