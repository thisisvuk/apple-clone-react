import React from "react";
import "../css/footer.css";

export default function Footer() {
  const arr = [
    "Shop and Learn",
    "Apple Wallet",
    "Account",
    "Entertainment",
    "Apple Store",
    "For Business",
    "For Education",
    "For Healthcare",
    "For Government",
    "Apple Values",
    "About Apple",
  ];

  return (
    <div className="container-footer">
      <p>
        1. Trade-in values will vary based on the condition, year, and
        configuration of your eligible trade-in device. Not all devices are
        eligible for credit. You must be at least 18 years old to be eligible to
        trade in for credit or for an Apple Gift Card. Trade-in value may be
        applied toward qualifying new device purchase, or added to an Apple Gift
        Card. Actual value awarded is based on receipt of a qualifying device
        matching the description provided when estimate was made. Sales tax may
        be assessed on full value of a new device purchase. In-store trade-in
        requires presentation of a valid photo ID (local law may require saving
        this information). Offer may not be available in all stores, and may
        vary between in-store and online trade-in. Some stores may have
        additional requirements. Apple or its trade-in partners reserve the
        right to refuse or limit quantity of any trade-in transaction for any
        reason. More details are available from Apple’s trade-in partner for
        trade-in and recycling of eligible devices. Restrictions and limitations
        may apply.
      </p>
      <p>
        Available in the U.S. on <a href="/">apple.com</a>, in the
        Apple&nbsp;Store app, and at Apple&nbsp;Stores.
      </p>
      <p>
        If you reside in the U.S. territories, please call Goldman Sachs at
        877-255-5923 with questions about Apple&nbsp;Card.
      </p>
      <p>
        If you reside in the U.S. territories, please call Goldman Sachs at
        877-255-5923 with questions about Apple&nbsp;Card.
      </p>
      <p>
        Learn more about how Apple&nbsp;Card applications are evaluated at{" "}
        <a href="https://support.apple.com/kb/HT209218">
          support.apple.com/kb/HT209218
        </a>
        .
      </p>
      <p>
        <span class="tv-plus-legal-general">
          A subscription is required for Apple&nbsp;TV+.
        </span>
      </p>
      <p>
        <span class="tv-plus-legal">
          Major League Baseball trademarks and copyrights are used with
          permission of MLB Advanced Media, L.P. All rights reserved.
        </span>
      </p>

      <hr />

      {arr.map((str, index) => {
        return (
          <>
            <div className="footer-links">
              <p>{str}</p>
              <i className="gg-chevron-right"></i>
            </div>
            <hr />
          </>
        );
      })}

      <p>
        More ways to shop: <a href="/">Find an Apple Store</a> or{" "}
        <a href="/">other retailer</a> near you. Or call 1-800-MY-APPLE.
      </p>
      <p>
        <a href="/">United States</a>
      </p>
      <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
      <p>
        Privacy Policy | Terms of use | Sales and Refunds | Legal | Site Map
      </p>
    </div>
  );
}
