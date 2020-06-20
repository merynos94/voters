import React from "react";

const Introduction = () => {
  return (
    <div>
      <hr />
<p>Secret voting schemes have been proposed by many researchers from both the
theoretical and practical points of view. 
</p>
<p>In the scheme using the multi-party protocol [GMW87, BGW88, CCD88], all
procedures are managed by just the voters, however, it takes many communication acts to prove that all acts were performed correctly. Therefore, this approach
is interesting theoretically, but is impractical. A practical secret voting scheme
requires additional participants, e.g., a trusted center or an administrator. 
</p>
<p>There are two types of this approach: one is the voter sends the ballot in an
encrypted form and the other is voter sends the ballot through an anonymous
communication channel. 
</p>
<p>The first type have been proposed by Benaloh (Cohen) el al. and Iversen
[CF85, BY86, Iv91], and their schemes utilize the higher degree residue encryption technique. The scheme in [CF85] needs distributed centers to protect voter
privacy, however, the voter must prove that the distributed ballot is valid, so
all voting must be done at the same time. Iversen [Iv91] evades this problem by
using the technique proposed to realize electronic money [CFN90]. However, the
essential drawback of this approach is that if all centers conspire, the privacy
of voters is violated. Moreover, these schemes are less practical for large scale
elections, since it takes a lot of communication and computation overhead when
the number of voters is large. </p>
<p>As a scheme of the second type, Chaum proposed a voting scheme that used
an anonymous communication channel, and it provides unconditionally security
against tracing the voting [Ch88b]. Independently Ohta proposed a practical secret voting scheme using only one administrator in similar manner [Oh88]. These
schemes are more suitable for large scale elections, since the communication and
computation overheads are reasonable even if the number of voters is large. </p>
<p>However, both schemes have the same drawbacks: the problems of fairness
and privacy. As the fairness problem, these schemes don't ensure voting fairness,
i.e., the center knows the intermediate result of opening the bMlot, so he can
affect the voting by leaking the result. As the privacy problem, voter's privacy
is violated, when a voter notices that his voting was not counted correctly, and
claims it by showing his voting.</p>
<p>Recently, Asano et al. proposed a scheme which overcomes the fairness problem [AMI91]. This scheme, unfortunately, is not secure against disruption by
the administrator. Subsequently, Sako proposed a scheme to solve the privacy
problem [Sa92]. This scheme, however, doesn't overcome the fairness problem
and voting is limited to only yes/no. </p>
<p>Therefore, no practical and secure secret voting scheme has been proposed
which is suitable for large scale elections (or based on the second type) and solves
the privacy and fairness problems at the same time. </p>
<p>This paper solves these problems: we propose practical and secure secret
voting scheme which is suitable for large scale elections and solves the privacy
and fairness problems at the same time. That is, our scheme ensures the privacy
of the voters even if both the administrator and the counter conspire, and voting
fairness, i.e., no one can know even intermediate result of the voting. Furthermore
fraud by either the voter or the administrator is prohibited. </p>
<p>Section 2 defines the structure needed by a practical secret voting scheme,
  and we conclude this paper in Section 3. </p>
<hr />
        </div>
        
  );
};
export default Introduction;