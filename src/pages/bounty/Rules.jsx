export const Rules = () => (
  <div className="my-5">
    <h3>Rules</h3>
    <ol>
      <li>
        As the starting player’s third turn begins, reveal the top bounty card.
      </li>
      <li>
        Claim the revealed bounty during your turn and collect your reward!
      </li>
      <li>
        As each turn begins, if no bounty is being offered, reveal the next one.
        If the pile is empty, shuffle all claimed bounties and restock.
      </li>
      <li>
        If the bounty went unclaimed last turn, increase its reward to the next
        level.
      </li>
    </ol>
  </div>
);
