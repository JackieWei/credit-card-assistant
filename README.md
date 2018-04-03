# credit-card-assistant
Loyal assistant to help manage your credit cards.
User stories:
1. Credit Card information CRUD
2. Notification for bill date, due date, tolerance date(exactlly to hours)
3. Credit Card bill list, including receipt information
4. Humanity friendly input, from all possible channels, Wechat/UnionPay/Alipay/Receipt.
5. Add to Wechat/Alipay

#Design:
App View
    1. Home
        a. Notifications, click open to relevant App.
            1. Bill date, open to check bill. With the register App information.
            2. Due date, check bill, click to postpone to tolerance date or click to return immediately. Use smart choice.
                a. If amount lower than certain amount
                b. Other cases.
            3. Tolerance date, check bill, if not returned, warning or alert for every 1 hours. Auto call emergency contact before 3 hours of due time.
            4. Smart advice, for example, A card's due date should be paid on B card's bill date for the best. No Action need.
            5. A click to remove all notifications.
        b. Card information maintenance.
            1. Add card, better to use screenshot/photograph, only use last four number as identifier
            2. Add receipt
    2. 
#Refer
https://github.com/sufangyu/react-intl-demo 
https://github.com/dongrenguang/todo-list 