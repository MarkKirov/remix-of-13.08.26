ALTER POLICY "Public can submit leads" ON public.leads
WITH CHECK (
  agreed_to_policy IS TRUE
  AND char_length(btrim(name)) BETWEEN 2 AND 80
  AND char_length(btrim(phone)) BETWEEN 10 AND 20
  AND char_length(regexp_replace(phone, '[^0-9]', '', 'g')) BETWEEN 10 AND 15
);
