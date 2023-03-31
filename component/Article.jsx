import React from "react";
import Image from "next/image";
import { useState } from "react";
export default function Article() {
  const [state, setState] = useState(true);
 
  return (
    <>
    <div>
      <div className="container">
        <div className="row" style={{ display: "flex" }}>
          <div className="col-lg-4 col-md-4 col-sm-12">
          {state &&  <img className="img" src="/tyyab.png" alt="some"  />}
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 ">
            <h3 className="heading">
              Rajab Tayyab Erdoğan - The Brave Son of Islam
            </h3>
            <div className="content">
              <h5 className="hide" onClick={()=> setState(!state)}>  Read full article</h5>

            {state && <><p>
                  Recep Tayyip Erdogan is arguably the most successful leader in
                  Turkey's democratic history. After 11 years as prime minister,
                  he will now become his country's first directly-elected
                  president, in what has been until now a largely ceremonial role.
                </p><p>
                    He has dominated the political landscape since 2002, steering
                    his Justice and Development (AK) Party party to three general
                    election victories. During his term, Turkey has seen
                    unprecedented economic growth, constitutional reform, and a
                    re-emergence as a major global power. This success in addition
                    to his personal charisma and work as PM have made Turkey a model
                    to emulate for many Muslim countries.
                  </p><p>
                    He won 52% of the vote at the ballot box in the August 2014
                    presidential poll. Barred from standing for another term as
                    prime minister, he could now serve as president for up to 10
                    years and says he wants to concentrate greater powers in the
                    post.
                  </p><p>
                    He has brought economic and political stability to a country
                    that not long ago lurched from one crisis to another. During his
                    premiership the economy has grown strongly and Turkey is
                    becoming a manufacturing and export powerhouse
                  </p><p>
                    He has also dealt powerfully with his rivals: facing down an
                    army which once stepped into politics - and overthrew elected
                    governments - whenever it felt the need
                  </p><p>
                    Erdogan has also worked on allowing religious freedom in the
                    Muslim-majority country, which was previously ruled by an
                    oppressive and extremist secular regime.
                  </p></>}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
