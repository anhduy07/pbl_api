package com.example.demo.controllers;


import com.example.demo.dto.GoodsCartDTO;
import com.example.demo.model.*;
import com.example.demo.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Controller
@RestController
@CrossOrigin("*")
@RequestMapping("/cart")
public class CartControler {
    @Autowired
    CartService cartService;

    @Autowired
    UserService userService;
    @Autowired
    BillService billService;
    @Autowired
    GoodsService goodsService;

    @Autowired
    GoodsCartService goodsCartService;
    @Autowired
    private JavaMailSender emailSender;

    @GetMapping("/getAll")
    public ResponseEntity<List<GoodsCartDTO>> getAllGoodsCart(@RequestParam("username") String username) {
        User user = userService.findByUsername(username);
        List<GoodsCartDTO> goodsCartDTOList = new ArrayList<>();
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Cart cart = user.getCart();
        List<GoodsCart> goodsCartList = cart.getGoodsCartCollection();
        if (goodsCartList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        for (GoodsCart goodsCart : goodsCartList) {
            if (goodsCart.getStatus().equals(true)) {
                goodsCartDTOList.add(new GoodsCartDTO(
                        goodsCart.getIdGoodsCart(),
                        goodsCart.getIdGoods(),
                        goodsCart.getQuantityCart(),
                        goodsCart.getGoodsName(),
                        goodsCart.getPrice(),
                        goodsCart.getTradeMark(),
                        goodsCart.getSaleOff(),
                        goodsCart.getPriceForSaleOff(),
                        goodsCart.getImage(),
                        goodsCart.getCart().getIdCart(),
                        goodsCart.getStatus(),
                        goodsCart.getQuantity()
                ));
            }

        }
        return new ResponseEntity<>(goodsCartDTOList, HttpStatus.OK);
    }

    @GetMapping("/findByIdGoods/{idGoods}")
    public ResponseEntity<GoodsCartDTO> findByGoodsCart(@PathVariable("idGoods") Long idGoods) {
        GoodsCart goodsCart = goodsCartService.findByIdGoodsStatus(idGoods);
        if (goodsCart == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        GoodsCartDTO goodsCartDTO = new GoodsCartDTO(
                goodsCart.getIdGoodsCart(),
                goodsCart.getIdGoods(),
                goodsCart.getQuantityCart(),
                goodsCart.getGoodsName(),
                goodsCart.getPrice(),
                goodsCart.getTradeMark(),
                goodsCart.getSaleOff(),
                goodsCart.getPriceForSaleOff(),
                goodsCart.getImage(),
                goodsCart.getCart().getIdCart(),
                goodsCart.getStatus(),
                goodsCart.getQuantity()
        );
        return new ResponseEntity<>(goodsCartDTO, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Void> addGoodsCart(@RequestBody GoodsCartDTO goodsCartDTO) {
        if (cartService.finById(goodsCartDTO.getCart()) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        GoodsCart goodsCart = new GoodsCart();
        goodsCart.setIdGoods(goodsCartDTO.getIdGoods());
        goodsCart.setQuantityCart(goodsCartDTO.getQuantityCart());
        goodsCart.setGoodsName(goodsCartDTO.getGoodsName());
        goodsCart.setPrice(goodsCartDTO.getPrice());
        goodsCart.setTradeMark(goodsCartDTO.getTradeMark());
        goodsCart.setPriceForSaleOff(goodsCartDTO.getPriceForSaleOff());
        goodsCart.setSaleOff(goodsCartDTO.getSaleOff());
        goodsCart.setImage(goodsCartDTO.getImage());
        goodsCart.setCart(cartService.finById(goodsCartDTO.getCart()));
        goodsCart.setStatus(true);
        goodsCart.setQuantity(goodsCartDTO.getTotalQuantity());
        goodsCartService.save(goodsCart);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/find-by-cart")
    public ResponseEntity<Long> findByCart(@RequestParam("username") String username) {
        User user = userService.findByUsername(username);
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Cart cart = user.getCart();
        return new ResponseEntity<>(cart.getIdCart(), HttpStatus.OK);
    }

    @PutMapping("/update-goods-cart")
    public ResponseEntity<Void> updateGoodsCart(@RequestParam("idGoodsCart") String idGoodsCart, @RequestBody GoodsCartDTO goodsCartDTO) {
        GoodsCart goodsCart1 = goodsCartService.findByGoodsCart(Long.parseLong(idGoodsCart));
        if (goodsCart1 == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            goodsCart1.setIdGoods(goodsCartDTO.getIdGoods());
            goodsCart1.setQuantityCart(goodsCartDTO.getQuantityCart());
            goodsCart1.setGoodsName(goodsCartDTO.getGoodsName());
            goodsCart1.setPrice(goodsCartDTO.getPrice());
            goodsCart1.setTradeMark(goodsCartDTO.getTradeMark());
            goodsCart1.setSaleOff(goodsCartDTO.getSaleOff());
            goodsCart1.setPriceForSaleOff(goodsCartDTO.getPriceForSaleOff());
            goodsCart1.setImage(goodsCartDTO.getImage());
            goodsCart1.setCart(cartService.finById(goodsCartDTO.getCart()));
            goodsCartService.save(goodsCart1);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @DeleteMapping("deleteAll")
    public ResponseEntity<Boolean> resetCart(@RequestParam("idGoodsCart") String idGoodsCart) {

        GoodsCart goodsCart = goodsCartService.findByGoodsCart(Long.parseLong(idGoodsCart));
        if (goodsCart == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        goodsCartService.deleteById(Long.parseLong(idGoodsCart));
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/pay-money")
    public ResponseEntity<Boolean> payMoney(@RequestParam("username") String username) {
        boolean check = false;
        User user = userService.findByUsername(username);
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Cart cart = user.getCart();
        Goods goods = null;
        List<GoodsCart> goodsCartList = goodsCartService.findGoodsCartByCart_IdCartAndStatusTrue(cart.getIdCart());
        List<GoodsCart> goodsCartList1 = new ArrayList<>();
        Bill bill = new Bill();
        Date date1 = new Date();
        SimpleDateFormat formatter1 = new SimpleDateFormat("dd-MM-yyyy");
        bill.setCreatedDate(formatter1.format(date1));
        bill.setBillType(true);
        bill.setUser(user);
        bill.setStatus(false);
        bill.setGoodsCartCollection(goodsCartList1);
        billService.save(bill);
        for (GoodsCart goodsCart : goodsCartList) {
            check = false;
            goods = goodsService.findById(goodsCart.getIdGoods());
            if (Integer.parseInt(goods.getQuantity()) >= Integer.parseInt(goodsCart.getQuantityCart())) {
                check = true;
                goodsCartList1.add(goodsCart);
                goods.setQuantity(String.valueOf(Integer.parseInt(goods.getQuantity()) - Integer.parseInt(goodsCart.getQuantityCart())));
                goodsCart.setQuantity(String.valueOf(Integer.parseInt(goods.getQuantity()) - Integer.parseInt(goodsCart.getQuantityCart())));
                goodsCart.setStatus(false);
                goodsCart.setBill(bill);
                goodsCartService.save(goodsCart);
                goodsService.save(goods);
            }
        }
        if(check) {
            try {
                int index = 0;
                int priceSale = 0;
                int totalMoney = 0;
                MimeMessage message = this.emailSender.createMimeMessage();

                Date date = new Date();
                SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
                String dateNow = formatter.format(date);
                Calendar c = Calendar.getInstance();
                c.setTime(date);
                c.add(Calendar.DATE, 3);
                date = c.getTime();
                String dateEnd = formatter.format(date);

                System.out.println(String.format("%,.3f",(double) priceSale));

                MimeMessageHelper helper = new MimeMessageHelper(message, true, "utf-8");
                helper.setTo(user.getEmail());
                helper.setSubject("H??a ????n thanh to??n");
                StringBuilder mailContent = new StringBuilder(
                        "<!DOCTYPE html>\n" +
                                "<html lang=\"en\">\n" +
                                "<head>\n" +
                                "    <meta charset=\"UTF-8\">\n" +
                                "    <title>Title</title>\n" +
                                "</head>\n" +
                                "<body>\n" +
                                "<div style=\"width: 600px; margin-left: 100px; border: 1px solid black; background: rgba(255,103,184,0.16); border-radius: 6px\">\n" +
                                "    <table>\n" +
                                "        <tr>\n" +
                                "            <td>   <img src=\"(link g??n ???nh shop)\" style=\"width: 60px; height: 60px;border-radius: 100%; margin-left: 5px\">\n" +
                                "            </td>\n" +
                                "            <td>\n" +
                                "                <h1 style=\"margin-left: 100px; color: #7fad39\">H??a ????n mua h??ng</h1>\n" +
                                "            </td>\n" +
                                "        </tr>\n" +
                                "\n" +
                                "    </table>\n" +
                                "    <strong style=\"margin-left: 10px \">Web b??n h??ng:</strong><strong style=\"; color: #7fad39\"> Ecommerce</strong>   <strong style=\"margin-left: 168px\">Giao h??ng ng??y: "+ dateNow +"</strong><br>\n" +
                                "    <strong style=\"margin-left: 10px\">Email: longrin0408.gmail.com </strong>                               <strong style=\"margin-left: 83px\">Ng?????i giao: long shipper</strong><br>\n" +
                                "    <strong style=\"margin-left: 10px\"> S??t: 0905.999.999</strong>                                                <strong style=\"margin-left: 223px\">D??? ki???n giao ng??y: "+ dateEnd +"</strong><br>\n" +
                                "    <br>\n" +
                                "    <strong style=\"margin-left: 200px; font-size: 20px\">C??c s???n ph???m c???a b???n</strong>\n" +
                                "    <table style=\"border-radius: 5px; border: 1px solid black; margin-left: 10px\">\n" +
                                "        <thead >\n" +
                                "        <tr style=\";border: 1px solid black\">\n" +
                                "            <td style=\"width: 110px;text-align: center;border: 1px solid black\">#</td>\n" +
                                "            <td style=\"width: 110px;text-align: center;border: 1px solid black\">C??c s???n ph???m</td>\n" +
                                "            <td style=\"width: 110px;text-align: center;border: 1px solid black\">Gi??</td>\n" +
                                "            <td style=\"width: 110px;text-align: center;border: 1px solid black\">S??? l?????ng</td>\n" +
                                "            <td style=\"width: 110px;text-align: center;border: 1px solid black\">T???ng</td>\n" +
                                "        </tr>\n" +
                                "        </thead>\n" +
                                "        <tbody>");

                for (GoodsCart goodsCart : goodsCartList1) {
                    index++;
                    priceSale = Integer.parseInt(goodsCart.getPrice())*Integer.parseInt(goodsCart.getQuantityCart())-( (Integer.parseInt(goodsCart.getPrice())*Integer.parseInt(goodsCart.getQuantityCart()) * Integer.parseInt(goodsCart.getSaleOff()))/100);
                    totalMoney += priceSale;
                    mailContent.append("<tr>\n");
                    mailContent.append("<td style=\"width: 110px;text-align: center;border: 1px solid black\">");
                    mailContent.append(index);
                    mailContent.append("</td>\n");
                    mailContent.append("<td style=\"width: 110px;text-align: center;border: 1px solid black\">");
                    mailContent.append(goodsCart.getGoodsName());
                    mailContent.append("</td>\n");
                    mailContent.append("<td style=\"width: 110px;text-align: center;border: 1px solid black\">");
                    mailContent.append(String.format("%,.3f",Double.parseDouble((goodsCart.getPrice()))/1000));
                    mailContent.append(" VN??");
                    mailContent.append("</td>\n");
                    mailContent.append("<td style=\"width: 110px;text-align: center;border: 1px solid black\">");
                    mailContent.append(goodsCart.getQuantityCart());
                    mailContent.append("</td>\n");
                    mailContent.append("<td style=\"width: 110px;text-align: center;border: 1px solid black\">");
                    mailContent.append(String.format("%,.3f",(double) priceSale/1000));
                    mailContent.append(" VN??");
                    mailContent.append("</td>\n");
                    mailContent.append("</tr>\n");
                }

                mailContent.append("</tbody>\n" +
                        "    </table>\n" +
                        "    <br>\n" +
                        "    <table>\n" +
                        "        <tr>\n" +
                        "            <td>\n" +
                        "                <strong style=\"margin-left: 10px\">Ph?? giao h??ng: 15.000 VN??</strong>\n" +
                        "                <br>\n" +
                        "                <strong style=\"margin-left: 10px\">T???ng chi ph?? h??a ????n: "+ String.format("%,.3f",(double)(totalMoney + 15000)/1000)+" VN??</strong>\n" +
                        "            </td>\n" +
                        "            <td>\n" +
                        "                <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMfH36G-5u3qfC1VW4_w6zqvjK1Ajcc07zHg&usqp=CAU\" style=\"width: 60px; height: 60px; margin-left: 100px\">\n" +
                        "            </td>\n" +
                        "            <td >\n" +
                        "               <strong style=\"margin-left: 10px\">Ng?????i B??n k?? t??n</strong>\n" +
                        "                <br>\n" +
                        "                <i style=\"margin-left: 37px\"> h???i </i><br>\n" +
                        "                <small style=\"margin-left: 10px\">Long Bang Duy</small>\n" +
                        "            </td>\n" +
                        "        </tr>\n" +
                        "\n" +
                        "    </table>\n" +
                        "    <small style=\"margin-left: 10px\"><strong>?????a ch??? giao h??ng:</strong> 04 - Nguy???n L????ng B???ng - H??a Kh??nh B???c - Li??n Chi???u - ???? N???ng.</small>\n" +
                        "    <hr>\n" +
                        "    <a style=\"margin-left: 10px\" href=\"http://trangchucuarminh\">Mua h??ng t???i ????y!</a>\n" +
                        "    <p style=\"margin-left: 10px\">C???m ??n b???n ???? mua h??ng t???i website ch??ng t??i! Ch??c qu?? kh??nh vui v???.</p>\n" +
                        "</div>\n" +
                        "</body>\n" +
                        "</html>"
                );
                helper.setText(String.valueOf(mailContent), true);
                this.emailSender.send(message);
            } catch (MessagingException messaging) {
                messaging.getStackTrace();
            }
        }
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @GetMapping("/getBillUser")
    public ResponseEntity<List<Bill>> getBillUser(@RequestParam("username") String username) {
        User user = userService.findByUsername(username);
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        List<Bill> billList = billService.findAllBillById_User(user.getIdUser());
        if(billList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(billList, HttpStatus.OK);
    }



    @GetMapping("/getBillDetail")
    public ResponseEntity<List<GoodsCart>> getBillDetail(@RequestParam("idBill") String idBill) {
        Bill bill = billService.findById(Long.parseLong(idBill));
        if (bill == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        List<GoodsCart> goodsCartList = (List<GoodsCart>) bill.getGoodsCartCollection();
        if(goodsCartList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(goodsCartList, HttpStatus.OK);
    }
}
