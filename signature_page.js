<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title></title>
    <script><![CDATA[
    $(document).ready(function () {
      if ($("p:contains('Date Signed')").length > 0) {
          alert('look into this');
          $('input[name="signature"]').show();
          $('#i_apply').prop('checked', true);
          $('#my_work').prop('checked', true);
          $('#waive_confidentiality').prop('checked', true);
          $('#abide_rules').prop('checked', true);
     }  else {
        $('button').hide();
        $('input[name="signature"]').hide();
        $('input[type="checkbox"]').click(function () {
          var numUnchecked = $('input:checkbox:not(":checked")').length;
          if (numUnchecked > 0) {
            alert("the number unchecked is: " + numUnchecked);
            $('input[name="signature"]').hide();
            $('button').hide();
          }
          else  {
            alert("the number unchecked is: " + numUnchecked);
            $('input[name="signature"]').show();
            $('button').show();
         }
        });
     }
     });
]]></script>
  </head>
  <body>
    <div class="checkbox-group=">
      <strong>Please check&#160;boxes below in order to sign&#160;your application. Your application must be signed before submission.</strong><br />
      <br />
      <input id="i_apply" name="i_apply" type="checkbox" value="I apply" /> <label for="i_apply">By electronically submitting this application, I hereby apply for admission to the University of Wisconsin-Madison Graduate School.</label><br />
      <br />
      <input id="my_work" name="my_work" type="checkbox" value="My work" /> <label for="my_work">I affirm that the documents presented in this application are my own work. I understand that falsification of any kind can result in rejection of my application or my admission being rescinded. All information is correct and complete to the best of my knowledge. Inaccurate information may affect my admission, enrollment, tuition or financial aid status.</label><br />
      <br />
      <input id="waive_confidentiality" name="waive_confidentiality" type="checkbox" value="Waive confidentiality" /> <label for="waive_confidentiality">I also understand that by proceeding to submit application information via electronic means, I waive all claims that I might otherwise have against the University of Wisconsin or its employees due to any breach in the confidentiality of the electronic medium.</label><br />
      <br />
      <input id="abide_rules" name="abide_rules" type="checkbox" value="Abide rules" /> <label for="abide_rules">If I enroll at the University of Wisconsin-Madison, I will abide by its rules and regulations.</label><br />
      &#160;
    </div>
  </body>
</html>
