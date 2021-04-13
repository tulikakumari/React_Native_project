import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet,Image,ImageBackground } from 'react-native'
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            imageUrl:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fwp-content%2Fuploads%2F2020%2F10%2FBtc-52.jpg&imgrefurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fmongolia-bitcoin-whatsapp-group-link-ulaanbaatar-btc-groups%2F&tbnid=QzDy1jdzF5aQAM&vet=12ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ..i&docid=LPpE7WtKZqpk9M&w=739&h=415&q=bitcoin%20image%20link&ved=2ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ",
            name: 'Bitcoin',
            price:'678',
         },
         {
            id: 1,
            imageUrl:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fwp-content%2Fuploads%2F2020%2F10%2FBtc-52.jpg&imgrefurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fmongolia-bitcoin-whatsapp-group-link-ulaanbaatar-btc-groups%2F&tbnid=QzDy1jdzF5aQAM&vet=12ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ..i&docid=LPpE7WtKZqpk9M&w=739&h=415&q=bitcoin%20image%20link&ved=2ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ",
            name: 'Ethereum',
            price:'2338',
         },
         {
            id: 2,
            imageUrl:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fwp-content%2Fuploads%2F2020%2F10%2FBtc-52.jpg&imgrefurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fmongolia-bitcoin-whatsapp-group-link-ulaanbaatar-btc-groups%2F&tbnid=QzDy1jdzF5aQAM&vet=12ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ..i&docid=LPpE7WtKZqpk9M&w=739&h=415&q=bitcoin%20image%20link&ved=2ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ",

            name: 'Binance Coin',
            price:'580',
         },
         {
            id: 3,
            imageUrl:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fwp-content%2Fuploads%2F2020%2F10%2FBtc-52.jpg&imgrefurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fmongolia-bitcoin-whatsapp-group-link-ulaanbaatar-btc-groups%2F&tbnid=QzDy1jdzF5aQAM&vet=12ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ..i&docid=LPpE7WtKZqpk9M&w=739&h=415&q=bitcoin%20image%20link&ved=2ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ",

            name: 'XRP',
            price: '120',
         },
         {
            id: 4,
            imageUrl:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQUExYUFBQYGBYZGhkZGhoYGhoZGhwaFhoZGBkZHRYaHysiGhwoIBYWIzQjKCwuMTExGSE3PDcwOyswMS4BCwsLDw4PHRERHTIoISgwMDAwMDIwMDAwLjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMP/AABEIAKcBLgMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAABAgMEBQYHAAj/xABFEAACAQIEBAQDBAkBBQgDAAABAgMAEQQSITEFBkFREyJhcTKBkUJSobEHFCNicsHR4fCSFjNjgqJTc4OywsPS8SQ0Q//EABoBAAIDAQEAAAAAAAAAAAAAAAECAAMEBQb/xAAwEQACAgEEAQEGBgEFAAAAAAAAAQIDEQQSITFBUQUTIjJhcRSBkaHh8LEVI0LB0f/aAAwDAQACEQMRAD8Ayu1BahrhXoTGFrqPloCKmCZOvQhqJXXoZDgVohWig0cGjnIMYCEUBFKkUUrStBTE6EUNqEClwHJwrr0FdRyAEGutQUIqJkBtXLuKC9Kwx5iBQljBM45Lry0oeIi1gKkOHOqPZtbaVCYXELDFcNpUenHMzG+g6VzoUOdj54MtmptsWIZ47b8l+Xi8EZsLXvU1h2SVPQ1ly8RjBBzCrHwjmhRYXFap6aUEtsshhdHOJxx9QeP8leJIW6k6EfkRVe4nyi8YJYG1XJ+alzDS/wDm9S2ImTEw3HUaUyk98VNYBGmzZK2Mm4roxriHDGj13HemRFabNyy8qkZdPUVGYTlDUrlJI796OosjXygabVb8KXbKMjU5w2HaQ2UXq74fkkZrZT3J2p9BwHwjYBRWX8clxFZDfqHFtRi284KHiuCSIua1MCtq2WXg4kQAhbfnVZ5m4Akcd8tz6a/Olp1sZva1ydDT0Suwl35M9z0F6c4nDi/lpswtWySaEnDbJo4igIrqG9KxQhoKPQFaVjZC1wFdajUpMknj+FPFuNO9MstafiZ4J00sDbY1UeL8vsLsg07f0rdGSmso59eri5OD/UruauvejSREGxFj60W1A2AEUBFDeuoBC11GK0FqBDgaMDRVFG2opgYYUDLQZqEGjnJAlqClaKyUGiZCVwoSKCkCdR0Yg3FEoQKHZGLPOW0J0otFNKYbCvIbRoznsoJ/KjxFAUfQTIoAxFWLB8iY5xfwcg7yELTn/YKUWDSx3PRbt+VUy1VUe5IdVyfgR5T4c0zBnfyjp3q8JjRGPKRYbCoLA8nyopCYkHKLsAh8o9e1Hj5cmVgJJSS3w3Rhfrp3rnSursszKfHgz62jUWRUa+IrwvLJU88ql18Nie4GlMoecRnLFSAehBpLE8IcC4KH8KjcRHKm8DEd1sfyroVWaZr5kzK9Nckk4vgsE/OSt8I/A01fmLMbn8jVVl44qnzIwPqLfnR05kj+6fpWqKpS4wVyotfeS3xcyHa4qwcOaDEL5rBj0vWZLzDD2/CpHA81RpYqbe9VXU1Sjwlkv0stTTPMW+eOSwcwfo6UkvENeoGn4VTMdypOjZSht3NaPgebg6i1iLCpIcaikspAPvVCd0YpRX6mn38d7f5fcxLGcJZLjqOlR8iEGxFq2rmbltChmjXzAXIHUVT+I8LjxEV0+If5arq17yOematTOmM4qHlfuUO1BTnFYRkJFtt6QApHFplb4OBoprnotI2FImMHj2Q73qy8J5mU2WXb1qmmuvW1wT5XBjlRCTyzQsTwqDFf7si/puKhuK8oGBSfi9bVB8O4k8LZkYirRw/nXP5Zxcf59aSSk+H0aPcKbUa3j/sqEOBZztaiYnBlDbetY4d+rTJcBde4pOLkyB2LG9uwNUO9Jvno7Kp0yr2yypLt9mVDCm1zpSaitB43yOxYmMjL2P8AWoDBcoTu5UoVUbt0p1Ytu59GK+uvC92/17K6y0Qipzj/AA1ItAdfxqDvTQmpLKMFc1JZQFcKG1G8M2vbSmbwXKLfSC3owaiUokLEXANqm7AjOvQFKKDSiAk6Uc5J0ECmpTgvLuIxJ/ZJ5ertoo+Z3qy8t8l3ytOpaRtUhG5A+05+ytaNwjgqKAJCpXKRZRZIiNsq/aP7x0rman2hGv4Ycv8AYvhU5cspvL36PYQQWR8Q9ibDyxabgMfiq+8M4FHDkvkjQrqEAFnFjkLe35UfE8VvEngqHZTbynKFsNGLjT3Ud6i4cQ7QmJ8p82ay6AH+Ldq41urnJ5k8/wCDRCrHRLhIFWY38QLlfU5rAdNemlI4DmfDGVI41yKCxLFbLqL6HprUPHw9hKIlZSWGuWwW1r6tTXE4KzEWuB9pdRc62zbVlnfJPhIsVaY8m5us8qCHySFhcbjNpmv172p1xnmtEmjKp4gjVrMNLl1A+VqrogvoNTUrhOBpnCTTIjZVYqPiGY6A9ja9VxtnLhDOEVyx5Nj4zBhjKFIDlnUWJsAQAR8xS8SYOdHeOMoo+JrEZWY6j5fTWm3FeBxRRyyIWAjtbNc523PTS91A9a48PeEKpNg4VmUbX7epF96ZznDtcAik+mNsVy5DMkYOU+JfKrAFtPy0uao/Gv0fxl2EDWZd13A3+m1aFw3DCKZpCCTYhf3Da2Yf0pfCxEu0QUEufE8QDKSftBhs2lPVrLIfLL8gyrT+ZGD8W4HNhzaRDb7w2/tUfevQvEcFC4AdQyO+TQGwPUn7nzrPea/0dCzzYNhIqkhkH2SN/wD72rs6X2mrPhmsMy2UbeY8lJwnFZI9FY27VN8D5imZvMAQPlVZdSCQRYjcGpXlfCvJLYfDux9O1dGy2UYNpldH4euxTvXwrlmmcrcz5mMU1gPsnpbtSPHuFGFzNGPI2tht61H8YxMKoiLYSAggDoB1NWKLHCfDC2ul/mNxWXR6t7luXDNPtPSw1On/ABmnWI+F64KXzDw4SR+PGLkakDqPlVRljD6rvWhm0J/4b6H0Jqoc28JEEgeP4H19j2rq2LHZyNHqVZHkgHUjQ0Qin6srizb03mwxX1FZ5R8o3beMoUIotHvXZa2mXISjBq4rRTQD2PsDxWWL4GNu1W7g/OYbKj3X1/pVEWhL1mt00LFyuSyNs49GyRYgygFX02A3+vekeN8xJhktkzHstZfw/jM0PwOfY61ZcDzRFIgjkXznqe53JNc+VFtck85j6FmlhDG2x5bfZJngMGPTxASrem49CKpvMvLz4Zu6bZh/Or+ZYMPh7Iblh0NmY97jYVH4HjC5ck65h7XuOxvWmnUKbeVheDor2ZbOLemjmPq+39igYLB5vMdF/OlsXISvlXy7X6fKtSw/LeGxaq+XIvp5b+hHak+J8kF7RJlEfU7WHYAbmlnqMS45KNRa6a1VVHv5m/BmfBeDNO1l0Xqf861Occkiw8fhBfNb/Cau2H5fGGhNlsFGlrEmss4vi2lmdmFtbWO9LXOV8+VhI4EY23z3yWILr1f1GNr1eeA8G/VUDtEJMU65o0O0S2vmYdG6+lR/IXDo2kfEzC8OGAex2eQ38NPqCx/h9a0bl9GhP6xOw8TEBXY2LFUzXWMAd/Lp6iqvaGr92tkfzOtTXnljjkqYBGLqucKWmlbqD09ABoANKf4WP9ZiZSGSAsSpvZ5Rcn/ljtoO9qEKHxEkaxhYIwDKQP8AeyW8sYtuB1HU+9STT97C2wGwA9ugt+F/u1yIwbXLNDlgZPglChF8iDZVFvw6Co84DL19gP51MzSAD1P+b9Nj7WPzZYojqR0uToNTl67am3vprqFqtraWEMrOSG4vjEw0DzMPMWEcYBsb7u1/RahMNzlDIMhkKC+bK40vtuKnopmldo1F0SURSBlvZrZicrbKAp822ltarP6RYMLHAMka+K7nIwyj9mhOZvJpYkhR/C1J7jMVlDqfJLYLiUZl8Z3iXDoC7CNt8i7Zd7mw+tVblcycQ4kZpSQgZppddAiahfbRVqohjterdw/l3iGGXPDY+JGudQQTlazBGDC19VNvUVZGKguSPkvfGuNtBh58Ux8znJEh2DN8Om3lUX9xTHlDjkuMjkkk18IZEJO8r7e9gCTWfczcVxcixxYhCgjvlGUqLta57E6CrJyXzjhsPh1w/mjezkuR5TI50YkX0ACDUbZqX3aceSPK6NFSLQBhc/j8qXWG2o1Hcb1B8uccdlC4gK22SaMgxv03+w/odD6VPBzp3PfQN6Hs39PkEjTHAJ2PoZcQ4QkzNnbRky6XU5hqDcfEDrcG+2lI8FV0mmDqufKliCfPYZSTpYqPKdNripNmupboBc9xrrcb6W99O4uWMjqiu18t/wBpn3AYC2e22oIDW3BU7E1HFRaYim3wVLn/AJCTEq0+HAWdRmdALBh1ZfS+h7VlvD+JyYdmAFm2IPQitri43KvxqviBgA5ssccbBbEm5zAgA6dLiqX+lXlZf/3IVsrG0i/dYb/LYg/dPpXU0epU1skU30pr4llCPJ3APFBxGINy50v1Pf2FSPAsRHFiHiVrxsdO2Yb29KpsvM0ghWFfLsCb9Ow7U/w2FklMfhfGCCPS3ejOqUZOc5YT8eh1/ZU3dp7XNJKK4Xj7ltx6IXlw76XGZfY9R8xUc/DhNCcPNo4+Fu9tiKts/CUxMADALOo8rdQe9+q36VXIQ0ueCW0eIiOh7/dI7qa6Wj1kL4bH2v3PI6iqVE/fQ+Vvr0/gzTimAeCQxvuNj3HcV0GPsLHWtA45wX9ciswyYiMdevpfqD0tWdYnCtGxV1KsDYg1c8xfBuqtUlmLHLCkzS80LKbMCDSZWtj56KmnF4kFDVxjrstqDPUz6k+wRjQXpQ0RkpWMmFNCGot6E0mRh5h8a67G47GrBy7xKGSQCY5R27ntftVToQ9U2VRsjjo3Ue0dRRBwhLh/sbD+t+P5ITliXR3H/lT+tS2HkYAAEhQNB1PqTWO8I47NB8Buu+U7VdeFc8RSKBKchG47nsK41+jtr+Tox6q6drSS4WMJdtvy36EvzXxaWOLxEsVU6g7H0qupiMBxCyuPCmOgOgJPvsfnUriMH+txNLK2SOxyKDYAfeY96pnB+VJnnhAUmN5UXNt5cwufpWnRXqMHGb5RbZo3TDc5Zfl+E30kXjD8urh0w2BvmzyNiJT1KqMwBH8KoPman48cPPLnDukbMqKNAzsoUXJtoXIH8NI8Rw/icRxC3taEIL7AOdbfJLUg6Xw6pGQfEniBKXFhvvfsrfWuLqLN9rbNcIYgiYwWaOCKNz5wM8h655Mzsb/ugSn3RaQxvF1SaOEnK8gbKeisPKgPpmDC/wDw0NLPJmmN9iW+loR/7r/WmPEcMX1GjWBvsdRH9uxIAu5070zsaWELsy+R/JiVBIJtrp1KhrMBb70bxgW6rakUlVw3lHh+YFSdxIczIPY5mHUVE4SW7CN/iPQ3zW6XGYnr9rvUhimVBlC/DlNjfzOTZFuD97Q+mtZ4znKXPRZsSXAlHKfEAu0TFQkrb3EfmJLdbLl8xHcdDWW82cX/AFmdnGiDyxr2RdFHvbU+rGrhzhxIQYYqD5pboLXF0BzSOV6FiQPmazg1qi8omCa5L4UJ8QC4JjiHiSeoXZB6sbL861PGeWN4w+SeTMWOhIZ7ElVvsMiqL7WAFZnwDCY6FPGw6+VwpIGViQDdTl3GouDTx+cZQT48HnNgSbi9r7q1x1pJ5xwHHOS5cSxoCYgyKjwxpGFVhncsb2zejWOu43FZ1zhwyOGVGhuI5Y1lVSblMxIK36gFTY9rUviObM1rQqQNQGJy311yjQ79aheI495nLyNdjp6ADYAdB6VK1JdkwOOD8Zlw7XRrqdHjOqOOoZdvnvWwcF4oHAS5IKJItzqY3tlufvKwyk9sp3Wse4TwiWdrKtl+07aIo6kn+Q1rT+CRqlp9ciCKGEHQsiWDsV7NnJFCxg25LLisRZQv2nF7jS4+E+xPlHoWXtTYy3FtCfwO1tOxzrp2l/doslyza7k29CStvoZ/+kUgzX266D0z2t9PHj/0CqJSbCqxlxaYasqMckao22kcmkTrcWzKQoP8J7mluGA4hHhkUeG6ZLk5iZEJCsTtrcJ9KAzliUy3EoZfQAqswJ9B4kg+dI4KQpDHYkBVDeoYITqepzQ3/ChCxxkpeR9mY4KJxvlBcMFmaTMhJFjuCL/0ovB+bYoA1lJZhoew7DtenP6aFZcQlmOR1LBb+UHRr29mH0qgXr0O2N8E58lctU4ad6aCwn2/L/g0zg/N85DEp5yfJbbXQaemwFWccGixJSSVjFiEGtiBvrlP3hWVYHmDwVRl1cH6etSnGubhOqRRkjMRnOoNvug7+5rI9NZGzNKwiv2lsj7qmhJpr42+kXjmbExYeEl2tImqP963T59qyLjnFGnlMjWudNPSp/nSDFCOMyXMNhlYG+p79b+9VMV0oSmoJTfJnupornirpcfRl5nRXFmANRmL4RlF0Nx260MPGVAAYG/WgxfGgCMmvc1fD3kZYR6vWz9laqrfJpP6d/oRUi73FjSLrT9cert+1UWPUdP60bH8MK6ocyna29vatW/PDPIOh5k6+YryRgNDXEUANTJScSDQFaGgBoMgU0FKaGu8I79KXA2QFJJoxcGk3btRamSYJXCcWljAXMWjuDlJ00rS+R+aYp8RFGFyyXAVdlAAJP0AOlZGjVY/0cYkJxLCk6ftAP8AUCv86yX6eEo7scrkksz2xlyk8peM+pqXGYrY3EjXzwg39EbMbfI2+dNVv+rFVUgxSpJuScuZRcnXt9KnOboMmIw85Hlu0cn8Li1z/wBNMsNFHADESWeQiNiAAgbUqdALjQHqbGvMWpqx5OvDDihzPHaW47tb/mRSn4wfjR2jtdugFx62yn8om/1CjYKJzCocgSxWR/QqfI3t5R8i1LuASFG6ajrdTpb3Ui1v3QPtVZGOeQZIPiPD1PiuWCkWkZiSFPlRfMRqQDE4A/eHemWCxQkQu0kbkscojaws4ylmv8Nr/IZutSHNvCWxEKwLKUvciwuGtqATubDb0sazbiPI+LhN1GcdCh1+m9Ltju5YyzgY828U/WMQ7KT4a+SP+BSbH3Jux96b8B4ccROkV7A3LH7qKMzN8gDTTEYdkJV1KsNwRY1OcncfhwpkMkTMXyDMpGiq2YrY9CQt/QW61ehDQ+GYZ4opXIXoIo1JFh8IVm0FxlVbX7044hDFIZUlRXEcYdybZbtcZQ297jQ1Fx86QyuzrOFB2RvJa5JynMpDane4rsdi8PIrBZkQuUMjKYwWEd7KAGFhfXrsKxy+bksXRBczckpk8XD3RvD8VoHILKgsSwI3tcG29UiNyrAjcG466j0NaDxbmeKOSaYSiSV0MUarcqilcl2kNsxtr7ms9Y3NaYPKEaLly/jVxp8GQlZNxlvldRqwCjZwLm3W1XLiBzy4aJNIxlkuL2yR6m3yHysRWb8hYdnx+Hy6ZZAxPZV8zH2sDWl8ABYHPkaJzK8fm1VXLZkbsGX6Gxqq1JDRHQbzhugzX90aDOPcBGNu1JYiPyENqLAEA2vZEVlDdDZEkU9bUt4DFC66kWOa9ich/Zv/AB5QwPcVFYwyj4lKroLWsLbgX/5tB61ltuwuEWRiKYB1iteQvdnOYg3yNHkBtbcdvSoDDcVeO4VRd2JJbNpdswAB0FtR86mcPhhkZiLa2Fjbzbm/U6UvwfDCR7EbaAG257EdRVEbZPCLNiKf+msWOFB3Ea6/+Gn9Kzmr3+mrGB8WFBuE0HyAX/01Qr163T8VpHIs+YNSgNh60VB1NFZr1pyVjqfikzoI3lZkGoUm4FWH9H/AsNiWk/WJQgUDKCbXud6qdCDQ3epGuCQdaJSufvRWTtrXRf0MyfqJ0rFOym4JpIigvSDptdMlIWjm8r+Vzsw2PvTfHcMePUi6/eGo/tTUGpvh/GlVAjg6aX3uPWkluXMeTo6b8PenC57X4fr9GQVO+HcKlnzeGhbKLnt9e9SXBJ8N+sZ5Uyp9kbrfu1aLwyGIJ+xC5Sb+XqT196y6nVSqXEf/AA8/7Q1r0zcYR3ej8GccU5YkghWRzqTqo+zfa5qEMvbatU5v4aZcOwF7r5gB1K/n71lbJR0t7sjl95D7P1Mr63KfeQCAfQ0QrXGjK9aWdAKKecIdhPCU+ISR5ffMLU2yg7U+5cH/AOVh7/8AbRf+cUsvlZF2ek8fhBPAyNpnX6NaqzgUcRosgAkhJEotclCfiWx3NrE61McC4rnkxELaGJlt6hlDA/W4o3FMMzHxY9JUBBHRl6g968vqYp8+TpwyngYQTs0rTIAABlljO7Ib2b0I7HuakXhFg0bXv5lbodLWPfTQ+wO4pnwGCNEMrOSbefNoFGvkC7Abe9OMFD4SM4LMjnN4Y1tc3zJ1A/pVdUnt5+4Zd8CkUga4tZha69VPcdwe/X6imkmHyAiIMWlNha2WL9/XYDe2vw07KpIAyttsw3How7eh0pNprXV10YFSwJsc2nTUf5rRcuU2MlwYxzViTjMdkhF1usMXqqnKGJ6km5v61d5ORcGy+EUsY1s8wYg3RbySEbEXv9KsEXKGGw8yzQR/tbMEBPlXTVyPS4+tN+OcInfAyxwWaR/ITmGiDzPr3O3zqx7tyWPuKmsGMYPhzTziGAFyzFUvoSL6E9tNTU7jv0e42L4owSdrMuvtc671ZeROWJMGJsROmWUfs4lOvmb4m07D+dWfE4mOU3nQMMtlCgixHre4/sKrtujFd8jxi39jIn5XxYIBw8l/QX/KneC5HxTkZkEanrIwX/p3P0rQxwWEjOcwW9gDK3TXYWNOsMiooITIp66i99tTqfqayT1jXgdQRG8E5Xjw8TRoTncZZZNmy9UT7gPc+Y9BS8HDkiFkURi2rHf6k5vxX2qVilJByLmygnSwAA9Tp9PpVTxONxksvhomS/wiPzGx6mQ/D8rVS7JWDpKJZjxtAgjW6ka3AtZh8Fr/AGbCx96iuYOJ+K0ca6IBnI7NsFv1HUf2pXhvKdhZ53Mza+U3AA30b4vU7ChkwaK4QSgqBZpCLLn6KLaa1LZWbceOgx2Z+oxM/kUaaXvpqb9T3qe4HGIYGmb7IJHS7Hb6b0z4Lw8ySFGTKQLkHYKTa9xp0qK/SHx5RbCQ6Ko8xB6H+ZNPo6c/HLx0C2X/ABRmfNeI8ednBubk2O9jqPwtUKIzex0pfEOGkbobnUfSpTl/j5wxcPDHPE4yukgvoOzfZNesqilBI5M23JkJI9/YUWlsTlZ2ZFyqSSEvfKCdBc72qTi5TxLYYYqNM8ROU5NXBvbVNz8r04OCGrqFlIJBBBG4OhHyo0cbHZSfag2FRbeEi+89ciS4UmaIF8OTobHMl/suO3rVPvVw5S58nwrZJSZoHPnRzmOuhKk9fQ6Gn3NnKEM0P6/w4lojcyR/aS2rZV30vqv00rYpSg9s/wAmZVhrgoeYHf60V47e1BRg9tqsyATowNPeGcLkxDiOGNnc9FFx7k/ZHqamxyhAhEcuPhSY7rZmQH7pmHlv37UrmkHJWkW+p2p7w7jUsDXRiB937J76Upx3gk+FYLNGVB+Bh5o2HdXGjU0wuAllOWON3PZFLfkKkts19BJRUliS4L5wTnaGUBJfI21zqp/zotTh4bAwNo0IYFdANtyA34s3Ssr4jwXEQAGWGSMMbAuhUE9rml+C8yT4c+VsyaXR9VIGtvQX1sN659mjXdbwYp+z45zW8fQZ8cwgimkQWIDG1r2t0tfUj1pjUxiVfFS5/EDyyMLqTlIJOVQL6Ee2wp7ByNiWZQciqWYFiwsET45P4Btfqa1blCK3s6PMUlIrVOeH4oxyxvvldW/0sD/KrBxbkaWNc0beJ5h5cuVgrG0ZIJ0Zuib21ppJyXjM4jWEuSxQFCGGYC7C/psTsDpS+/rkuGFNM2LDzKnEDrpiYlYe4Fv5Cp1yfZhse/8AeqpDwaVsJhXnZYcRh7E5zciPbzZL22H0qyNi45UBWRWupBK3FjbcX1PWvPaut8yj4OrGSaTQxns7N0bqD8L2Onz0pfGcSUBSoIYeULsB/wA33fzplxlG1+8L27G+e3tYAa0wi4ot8kgJHcfEALbd965Sty2malFSWUTHDZAUdyuV7gF9gddAR1NDh5pGkZPDN1F8w2+h2pTAYxcqrGVdFa9vtfMdxTzE4pXUfEjFgD0OXrr2rRBRcVmXRU9yfRHvxMi9m1tlBO4F76XpKPi7RRhFGu5Y6ksWzMx96Xm4GsszZmHhx5Tbe9xc3NIcW4czWkjUKHyhFBsbkaabdL1H76KbTJ/tt4IvF4ovub+Yt8zuaQMmhvUpheFkwm+Yyq5VgADa3+b0jw7hDvMVkRljW+ZioGtr79tqyTrtk8LyPuikR4c9zT2GUu6s6lgtrB9jba4o2I4e9/2auRYspAAugO479PrT1cOGjheOO3ieRme9wdrkfI1VGmzn6BckICR2ckXtqLL2PTTpS+GnVWZXYIoW5NwST0Ww1o3DsHLG8iSZfCv5iujEt8Le1SX6hGgyINVIN7b33ux3FXQol8z/ADyI7F0MI4mP7ULkBAtlsXZD1z9BrsKWw+GW2QKGVN2YjJrr5vvEX96JxfHwIQ8r/ACAitZQNND0J0qhcwc7NM2SIlIx93QfTr71oVaz6ky2ic5p5pWFWhw/mc/G+mp9ew7Cs0xuK8ssxbNl8tz9qV//AIi5+lGhneWTwovie92Oyj7TsTsAOtN+PQnwwY0ZsNFpnAJDOxN2cj4SxF7HoBW+ipykl/UiuclGOf6yvfCL/aP4CkwxFc7Em53oK7Rzw+YHcW9RVx5Z/SBNAT42aWMRhI1RhH4eUg6ACwuBYnf1qlUINHJMGt4nD8N4pm8OwmYCZjEpEvQSIS9lYlmAA2AW5rPeYVGGnkw8ThkRyBIN3t3I001GmmlRSzfI9xoa4A/ZNx/nQ0rSY9c5Qzh4Jd7HfQ9+n9qtfJXEJY8NilU+aIJiYrfeVgknupQ2I7VUKf8AB+KyYaTxEsQQVZHF0dG0ZSOoP8q6Vsd0cHOi8D/mngheVJ8LEzw4gZ0VFLZHP+8i02Ktf5Utw3kwqQcTnv0ggHizN/FlusQ9W+lJf7YYoDLh3XDoDcRxKqLfa9zcufc0wxnMOKkB8XESlfu5soJ7ZVsKp2zxgtyiycQjnyeCGw+Ag6xGVfEf/vGW7ufew9KhG4RBs3EIMo6BJmA9vJUBI9zRb0yi10yYLrwmZoFyRcUw5iOvhypI6fKN4zb5Wo+M4rI4ytxiNF+7FHLGo9LRxrVGvRxL97X16/3qbFn+EQv3BsC0mGxqfrSYqIwFwoMhkWVGBRhFIMw66iqAVqT5f4xNhJRNCwuAQbi4KndWXtU7/tnhXZnk4bEHbXMhv7+SRSu/pS8xb4yQrnC+CzTkiGNmt8R2VfVnPlUe5q2cFxJw9klx+GbbyEyShcosl5EUg5b3CXIvUdxTmfDzqEePEZBtGssUcY/8NIgPnUaeJYVdUweY/wDFmdh/pQJf60s471iSJhPs0nh3MOCeS0LPMwBAUkxuXfy5kHxPI+t3Ngi9qkZGxBiChEjij0IH7NGt3diG8BOrbyHbTfJP9rMQukPhQD/gxqh/1kF/xp5wzm+a58c+INCXfU3UWjL/APaKm4TQE71is0eV8IdqRs74JY4bSSKxOjsb3bPv5VB9lQbC1UriE0EEgX9bkQoTYLEWGl9CS4v1B96leEcSSfh+eJmOSQ66vNdmIJ10Ez3PoobTaqbzTEM9xaxFvKPIrbFVb/8Apbq3U3rBs2y2NG6iT+XwXjB8xwT3VH8RRa4sVYZgq3AOwuW701xuAZf2kfnQi4I32XKCOmi/jWXwzvHIrqSrBgQR7j6j0rS8NxALiJoYSc8W6tYh1CxjQDcjU2tpe9YNRonGW6PX+DdCyKeGRWLDqxaNiCCbWNiLHWlE53xEdhIA4HcWPzNWASYea4f9jJcjzfD8RAs1tLldj9ajOK8OeI5niEidCLG9z66HTpc1j2uPa4NG6MugcHzyjEk3jvo1uoqeh5ijYIVmRsuq3tcaEW+hqh43wBe6mMm9g6sg00Fiwsb+hpCPCDoAwudQwOwvfQ1G2usoPu0/Q0zhPHYo4i3iKSXZ2LG18x1p8vMsQUsZEsb9e+1Y5NER0bp0PWm7XBvdhv36VdCyxLCZXKmGctGwLzDFmV/FWyBlsOoa35WFMcVzZEqZQ3lBuLWGxuNSay2Z2t8TfjQYbAyzaohI2JvpQak18UgbIp8IvHEufBe6WYm37x0+gqF4tz1iH0Hl9/6CorD8DmyljljF7efQ72valsLw6LN9ueT7qjyj1Pb50EoLPOSbG/oR88k873JZ9epso9ydBQw8KdyVRtftveyIvqT/AD19Kk8Ssaf751GpIijNzc9GfZB7XqE4vxssViVckd9I49L62vc7n1NX1bpvEULJRissHiGMjijOHgPkteWU7yW7dk10XqagcFzBPC5aCVowRlKg3Ur2ZTdW+YoZ8bGLxspcfeDWYEXtboVF9iPWoxBXYorUFjz5Zhtnu5DVODlSZkhMXnklQyGICzRxg5Vd2awAY7d6iJMK6qrsjBW+FipCtbezHQ/KpDhPMU0GewSTPkv4oLWMRvGRqPhOwNxoNNK1lBGTRMjFWBVlJVgdCCDYgjveiVYOEQwTyyPK5PkD2lkWLxJWYeITJsEGZ2sPMQKdcW5PILNh38QZ0CR2OfLKGePzmys2QZiOgIJqEyVSrBwvlgyqBmfxCM+RY8+VDopbzAgtvbta+4qDmhZTZlKnexBGh2Nj0qbwPNUikliwY7vG/hFth5gAVY2A1sDpQz6kBgZVcF1LAG7LfLcDcX6Vb4vDx8ADyCORQ2SKMDw4xGpsxDXZVI1NiF0J1bQ05X6MLjv1HzpeCLKplSXKykZcpIfW9zp8IHe/WujOOeemYYvAPMHDBh5jGGzrZWDbXDKGvl3XfY60xMt9G1HfqPnUlwXGxrKXxGZtDlawks5IszKxAbTNud7GxqR5oWDIZCVMzsPDETKwEaBVzyMpsSw12BzX0sKRyaaTHSzyVh4uo1H4j3FJUrcg3FcWVt9D3G3zH9KjyMhG9cRR3iI3+vQ/Oi1MsICsRqKW8QN8Wh7j+YpEigtQyyCrxke3Qjb60ShRyNv7fSlFQObDyt6/D9enzo5ZBJUudPn2HrQySD4RsPqT3NKTjL5R8z3/ALU2oNhL3+iziOmIwxYr4iEqRoQwHSkZ5WlYRyNZwMgFgEATuNAo3Nx9KrHA+IGGZJB0OvtVs5hlXxExCBSGtmBFxf27Vz76/j3I36eS28+CExMLxkZ18psRfYg2sQamcDjVxBzh1ixSKrRzEsCzR5RaQC4Ylb+YC/lF73psOMK3lkGjfEx8wzHR5GW3mIGirsKjcUkLG8TFDdrK17DWyjP0Y2v2Heqk300Wzin0zRMI64lDZo2dbFkRiQLE/ASA6gn7JUgXsL00j5gjw40mdV+GzDNF8V21Fxex6gVU+V55f12BWvcsUYncpYhlJHxC19aa8bmM0CYpSQ2cxS2+0wGaOQj7zJcE9ShPWqLNJGbyhYz28Fzl5twzAZowxIF2ifKt26ZDp+FMJBw+S9pGj3Hmi7esRH1tWeGYXuV17jQ/hUl+sQ+CCrSpJbY2ZDr7X/Gs8tDt+Uuje2W6HAIoHh4mJu6s79LkDzA23pdIu6Ydrd5DreqKmLYIWLKSdFuDr3PsO/ekoeIEmzWG2up22vVUtDN+R1qkvBopQfFbBLb1LnTfcdK5541Fjih/DFEAO+5NuvaqE3EXQDyLlNxmBLA630I6+lJS8VkN/MBe/wAK999TSf6fPOH/AH/I34peC4z8SgUmyPIR1lfy6a/Cuh9qiuIc1uf2auqKdMsYCqNOpHTX8Kqs0xb4mJ9z/KkmkA0Faa9BFcy5KJ6iT6JocVMcgZogVGoVje/Y32NrUHEOIB47RXJ1LE2D5mAzuR1v8ItoAPU1HYaYqhZ9U2CHZm/kBuSLdBSIRW1U5D2J0+TdPn9a2wqjHpGeVkmsZEAtGWl5HN7OPns31+1RDF903/P6VdGJTJkvxbjQniSO3hrEvlXM0mc3AVb2GUKubKTcgXF9ad8S5VWOOMiU+I7Iovbw3zpnZo8t2yJdVLEWJOlVmn/B+NTYcsYXy5xlYWuGH8rX3FqYglxDh8kLvHIpDIxU9RcdAw0O4p9wbmfEYd0ZJGISwCsSQFzKWVb/AABguU26EirFwjmrCypDh8REY4ldWkykFZWBAUNoLLdjIzEk+W3WqnxzwvGcQrlRWZR58+bKxGcMABY6aCpkGBDG4lpHZ2JJJJ8zFja+gudTam9DS0QAF2F77D+dTshPY7CNEQGsQRdSNiD17j503D220rq6uwjnBrK37remx+XSm8ikGx3rq6kYyEzRSK6upGWINHKR7djt9KOIw3w6Ht/Q11dShYgRRTQ11BhQKi+lKSHL5Rv1P8vagrqPgIEcttDqOx/zShMQOq/Q/wBetdXUCCBFTvAeJDKYnFx/KgrqptSwXUt7hvj48rEXuOh9KZiYg/56/wBa6urKjUaDyLEkrwm9ynUjS/hSFIkG6DUszddqi8Py+Rh8ZCGzDKrpf7+GYF7H7uWV1ubE11dWVTf7nQnXFptrwilTRMOgNDCg1LXCrq1j62sPU966urSc+fD4EcRPmNz7ADYAbAelJ3FdXUBRSHEsnwnfcbg+hB0NKZ1f9xvmVJ/NfxFdXVAMbTxFTlO9HwsGdrbC1yewG9dXUF2B9A4mS/sNFHYf1pLUmurqYAqJSBl3HY/5pQqgPw6Ht/Q11dViFkAX6MPn1/vQPFpcaiurqgAlBXV1AgpClzrsNTRZWub/AOW7V1dQfRD/2Q==",

            name: 'Tether',
            price:'600',
         },
         {
            id: 5,
            imageUrl:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fwp-content%2Fuploads%2F2020%2F10%2FBtc-52.jpg&imgrefurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fmongolia-bitcoin-whatsapp-group-link-ulaanbaatar-btc-groups%2F&tbnid=QzDy1jdzF5aQAM&vet=12ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ..i&docid=LPpE7WtKZqpk9M&w=739&h=415&q=bitcoin%20image%20link&ved=2ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ",

            name: 'Cardano',
            price:'400',
         },
         {
            id: 6,
            imageUrl:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fwp-content%2Fuploads%2F2020%2F10%2FBtc-52.jpg&imgrefurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fmongolia-bitcoin-whatsapp-group-link-ulaanbaatar-btc-groups%2F&tbnid=QzDy1jdzF5aQAM&vet=12ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ..i&docid=LPpE7WtKZqpk9M&w=739&h=415&q=bitcoin%20image%20link&ved=2ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ",

            name: 'Polkadot',
            price: '200',
         },
         {
             id:7,
             imageUrl:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fwp-content%2Fuploads%2F2020%2F10%2FBtc-52.jpg&imgrefurl=https%3A%2F%2Fwww.whatsappgrouplinkup.com.ng%2Fmongolia-bitcoin-whatsapp-group-link-ulaanbaatar-btc-groups%2F&tbnid=QzDy1jdzF5aQAM&vet=12ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ..i&docid=LPpE7WtKZqpk9M&w=739&h=415&q=bitcoin%20image%20link&ved=2ahUKEwiY7cm69vvvAhWHPrcAHb36B0QQMygCegUIARC7AQ",

             name: 'Uniswap',
             price: '500',
         }
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }
   render() {
      return (
         <View>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     {/* <Image style={styles.tinyLogo} source={{item.imageUrl}}/> */}
                     <Image
                       style={styles.tinyLogo}
                       source={{
                       uri: item.imageUrl,
                        }}
                      />
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                     <Text style = {styles.text}>
                        {item.price}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default List

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   tinyLogo:{
        width:50,
        height:60,
   },
   text: {
      color: '#4f603c'
   }
})
