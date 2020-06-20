import React from "react";

const Structure = () => {
  return (
    <div>
      <hr />
        <p>
        First we outline the proposed scheme. The scheme consists of the following
stages executed by the voters, the administrator, and the counter.
</p>
<p>
PREPARATION: Voter fills in a ballot, makes the message using the blind
signature technique to get the administrator's signature,
and sends it to the administrator.
</p>
<p>
ADMINISTRATION: Administrator signs the message in which the voter's ballot is hidden, and returns the signature to the voter. 
</p>
<p>
VOTING: The voter gets the ballot signed by administrator, and
sends it to the counter anonymously. 
</p>
<p>
</p>
<p>
OPENING: The voter opens his vote by sending his encryption key
anonymously.
</p>
<p>
COUNTING: Counter counts the voting and announces the result. 
 
        </p>
        <hr />
        </div>
        
  );
};
export default Structure;