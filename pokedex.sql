PGDMP     ;    2                z         	   pokemones    13.4    13.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16548 	   pokemones    DATABASE     g   CREATE DATABASE pokemones WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Uruguay.1252';
    DROP DATABASE pokemones;
                postgres    false            �            1259    16549 	   abilities    TABLE     �   CREATE TABLE public.abilities (
    id integer NOT NULL,
    pokemones_id integer NOT NULL,
    name character varying NOT NULL
);
    DROP TABLE public.abilities;
       public         heap    postgres    false            �            1259    16730    abilities_id_seq    SEQUENCE     �   ALTER TABLE public.abilities ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.abilities_id_seq
    START WITH 19
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    200            �            1259    16555    base    TABLE     �   CREATE TABLE public.base (
    id integer NOT NULL,
    pokemon_id integer NOT NULL,
    hp integer NOT NULL,
    atk integer NOT NULL,
    def integer NOT NULL,
    satk integer NOT NULL,
    sdef integer NOT NULL,
    spd integer NOT NULL
);
    DROP TABLE public.base;
       public         heap    postgres    false            �            1259    16713    base_id_seq    SEQUENCE     �   ALTER TABLE public.base ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.base_id_seq
    START WITH 10
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    201            �            1259    16558 	   pokemones    TABLE     "  CREATE TABLE public.pokemones (
    id integer NOT NULL,
    name character varying NOT NULL,
    weight character varying NOT NULL,
    height character varying NOT NULL,
    image character varying NOT NULL,
    description character varying,
    eliminado boolean,
    number integer
);
    DROP TABLE public.pokemones;
       public         heap    postgres    false            �            1259    16690    pokemones_id_seq    SEQUENCE     �   ALTER TABLE public.pokemones ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.pokemones_id_seq
    START WITH 10
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    202            �            1259    16564    types    TABLE     �   CREATE TABLE public.types (
    id integer NOT NULL,
    type_name character varying NOT NULL,
    pokemonid integer NOT NULL
);
    DROP TABLE public.types;
       public         heap    postgres    false            �            1259    16597    types_id_seq    SEQUENCE     �   ALTER TABLE public.types ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.types_id_seq
    START WITH 14
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    203            �            1259    16603    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    name character varying,
    email character varying NOT NULL,
    password character varying
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �          0    16549 	   abilities 
   TABLE DATA           ;   COPY public.abilities (id, pokemones_id, name) FROM stdin;
    public          postgres    false    200   �        �          0    16555    base 
   TABLE DATA           M   COPY public.base (id, pokemon_id, hp, atk, def, satk, sdef, spd) FROM stdin;
    public          postgres    false    201   [%       �          0    16558 	   pokemones 
   TABLE DATA           d   COPY public.pokemones (id, name, weight, height, image, description, eliminado, number) FROM stdin;
    public          postgres    false    202   Y+       �          0    16564    types 
   TABLE DATA           9   COPY public.types (id, type_name, pokemonid) FROM stdin;
    public          postgres    false    203   �[       �          0    16603    usuarios 
   TABLE DATA           9   COPY public.usuarios (name, email, password) FROM stdin;
    public          postgres    false    205   �_       �           0    0    abilities_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.abilities_id_seq', 160, true);
          public          postgres    false    208            �           0    0    base_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.base_id_seq', 151, true);
          public          postgres    false    207            �           0    0    pokemones_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.pokemones_id_seq', 157, true);
          public          postgres    false    206            �           0    0    types_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.types_id_seq', 242, true);
          public          postgres    false    204            =           2606    16571    abilities abilities_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.abilities
    ADD CONSTRAINT abilities_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.abilities DROP CONSTRAINT abilities_pkey;
       public            postgres    false    200            ?           2606    16573    base base_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.base
    ADD CONSTRAINT base_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.base DROP CONSTRAINT base_pkey;
       public            postgres    false    201            A           2606    16575    pokemones pokemones_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.pokemones
    ADD CONSTRAINT pokemones_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.pokemones DROP CONSTRAINT pokemones_pkey;
       public            postgres    false    202            C           2606    16577    types types_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.types DROP CONSTRAINT types_pkey;
       public            postgres    false    203            E           2606    16610    usuarios usuarios_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (email);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    205            F           2606    16757    abilities abilities_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.abilities
    ADD CONSTRAINT abilities_fkey FOREIGN KEY (pokemones_id) REFERENCES public.pokemones(id) NOT VALID;
 B   ALTER TABLE ONLY public.abilities DROP CONSTRAINT abilities_fkey;
       public          postgres    false    200    202    2881            G           2606    16752    base base_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.base
    ADD CONSTRAINT base_fkey FOREIGN KEY (pokemon_id) REFERENCES public.pokemones(id) NOT VALID;
 8   ALTER TABLE ONLY public.base DROP CONSTRAINT base_fkey;
       public          postgres    false    201    202    2881            H           2606    16747    types types_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_fkey FOREIGN KEY (pokemonid) REFERENCES public.pokemones(id) NOT VALID;
 :   ALTER TABLE ONLY public.types DROP CONSTRAINT types_fkey;
       public          postgres    false    2881    203    202            �   �  x�]��R�8Eש��LX~{IC��=MPL�f6���E�AE���e���*�����֢���FwP���w�{��^咭�A8XJ�V�A�h-�|���jxڸ��w0�j�|�)���R}�e<Fc��r������mg���N;�Kiֱ� ��]��`P��w��[�"��Oc���"�5k�<ɝٿ8�F<�ݼڹ�}J+�[b*�Y�?$�4�,����C�y��ʴ0˹c�ex�M*c�ۘb�Ӑb��lݸWY) �2�J����װ�o�!9;tG��B�)�S!���k!3!�z���>���s��B`6��ݪ�3���D.��W�e,������o����7�|���H*R�%-���	l,�K���/�I�w~�R C��˾�vɥ�*8�E$p��i�M3�پU�v=fL.�v�T�.R2��S.��RH�ǲ����f;'�G=e%��Th|��F���Ur��sTZH�����EU�0�~-�\�T.�=z)���,fG;��b���	8Ek�r�gl�I��V�����~r㽪Sa�X�S4�$:W�8lw�,=��e��B�бR
�e�T]	���ZH���9��e��pTu+��&r�PK6�&�:l8M.�F4��1�,cz��yܛ�{`�Z�"�5O����nTM+`�Ҧw6t��_�V�fram�is!���z:ϥ1H���R)`���"�J�֐�[|\�;�lw��񖟤V༃l]GkNSi��d�'g㞺u�pm�i&PA���Ηq����uZ��n��9�2�
M�z��~�m4h�pW��w{�f���A?�twp�>Ml�����#}�_���_c�*�Z<(�+0���i7vxJn�W����2?��W7/#��]��"Y�G4n��ڍ�1�bGϲ'�}�m��]��:��<�/��Į�_�����ۧ�%<I�p�e���73/���M�2<�󾷯��)5��W��x�ǂ+����_
��h�Y4���r\��a��ᨷh|��?
��GO.�q~�����U��"Ec��p��w�����><I�J��#���ރ7i�Ó���2ؙ�q�݌f��N�ᩏ��6<�7���`���]�1�]X4v��K?��=���O�`�(�����u      �   �  x�mWm��*����c���#ɦϫWS7�TwlY�?ښ��m]^�y-����w����_�-��vf�������V���hk��m���ﴽ�����[���_�n;N3=Z�C��� >ώ��!0�o�-�!s�>��h�h!�Bn�����Ct��Q�|2��:/0�G��)\�����f�&����o �w��q_ׄx?哦!p�/�N�J;��� ��Zځ}|0q�#����Qw��0c��-<HX��H����`6��&bV`2�٦�c�a�сf]�&�0^h�)�T��b�g\%K�.r8SV@��a��2�|��͔F�"KF��8s
��9�y��xSµL���4��Zg<�q�B��T�	z�(�(?�����h�gD�T��G��N���h�B[hYT6%����$���Rl�e���ۊ��)ƛ�e�^�v��m3�ƞ�J�c ��r$(����b�'��)D9�� �n��us� ȿ
)����VvX���ŃͤL��^Yp&'�r���|rp����W��@�^S6	ԥu{�:��}�5S/�$o�p��~Td�ii�W���9�瓺^�w��Ȏ�nx+�<{T���
xX��ﶜ�
q ۬W�"5��J�t�ׯy��w��U��B������XG���U�J���>+`��<��u6�-�q�^vpd�"�"�H�m�C�@�Ꮧ
��b)���	��L��R:JTg����%4��Kf�9B��Ԭ�?�eu�T2F���o��������A�x��$�L�eb~� !Q͂�/+�7G�Қt�74R��_"���VJ�`B���U1�t�Z3C�	��}�^�����bz���t"�����fMD#C����ϝ)��X���sW[���؏� ��U��C�jvk��lu� ݨ�n�N�螚�R�݅�^O���dv`�[�5�0i�eUÖS��l5~��#)(�5:Pq)ak����jG�\�V�R�Gm����[ȲN���u���{.]"̬�g�:'7�0�-��Do����;���bР�g�\��VI#DG��%K�K�k�VC9ګK�;�D;љEM�믘x;��Lzu�,(.u\���Pͳ��(b�;I�E9��-���"�|:�����}ix�j�:�=jpv��^�\=���=;�q�<_�?��
�0v���ԣ5Q|�֜�����x3��NSDl�'~S���
��,��d@!t³�]�(�r�S�b�
��!� m�U�5�;��
��t��h�H�$6}>ܐYN;����waY>�����4¬ �q����	��}��c��>�q�)F�_]�Rg��d�=2
{rc��a�\� o�:�υ���PnbD�� ���#D��� .	�#9��V$8�,�E��u�1�RF�x���*���h6��/�_�$]:d�L[��~9ݜ��h9!*�<$E������V���N�-YM�x#G ]s�i���ߟhZ��[i%��N�V*�?����{��S?�      �      x��}ۮ�ر�3�<� ˫u����n���n�9�˔8%ы�yY��F��/��;�'���U���� ����Z�Y�Y�Q�jnwɟ|չce�Z�����>�t]���/�h���\t��з�9����������+�.|Q�7�/r׹׿�������7_Ww�-���O_\�F�5�.^����k�C��Y�f��?g7'?y��t�Y㯮�����9�=�_m��_Bsv���벫{�mV�U�P�M_�S�]��E�m(�5Y�f��u5�J6��,�]�d�@�Vqi��:�|���p����2�E�����nB�K�Y�י����5�\rV���f7y��]�H[{�s��t�I�/��Єd���6�L��݌�����2��K&O�՞y��Y�߲�˫	��\���7�ʷ����?���RW�/�ŵ��wN�]_B++*�����+�^\-��1�����Y�u���,����_�nŅ��ط�]��ۨ���׺��/E�s�aqtevh���ٗY{,��8�+�E�_���ؠ�
�I���A1�(�|p+J���q��h�I�"������,A��mE�P��8��GU����W� �U�_%�6��7�3���%���{����Zpr�.46�H���վ�Y���6d����>���Z~*Z�]�mu�7�ruO�x���7g���O]Q�BM�n��wɷ�4�]�?�YN)��Z��h�B/�ĵT��������g,��f��Z�(E�d��"���=��@��tB�Mv�QQ*�5�����t����޺�I��d>��g������3�����rF�����M^&,G��@q�|q�t/�=/�X�sK��5}�&'�p917���P�E�����5r1�U��u�KYyǿU���J�Q��sS�����Ժ�� �4�T:hש�Mo���"]&�U�����T�ˏ~z(�t|���/��v�5��P��x����lH��"6���а��{I%n�_W�(�� lf�QV��QMk䊐�2������>Y.ĀO����S�}gQC���Z%|.V����7|���ƻk��)��_[Ռ���/"<�!�`C{e����[���J�8��v�-���Z����_�/7"�M��P�-<��f�ȧ�('a��.��3�����w�������Sry��!Z�r�vx��%�T:r���.3�%?����F�zY���.^TG����m���-�﹵'��R^Q٪�Ė�!)y�t>�%����ɆQ�N>[E��yר�\�֪��[/k!�TA>��[nb�T؁�Q��
᭥*�f���3�R�'�D	�f*o�E��[*��Ha���X�����6k�}Sڛ�l%Q�}�bK	H�g36�%�=������cY������ǿNr��kT^��h\��J)z��.���׿��ob>�A�<�H`���r�C����e�sugzC��.������;��x��#z��)��pO�<M�<���qK��~��� R�ݎ\�G��<�ս�s�=��x��m�H�	��.K��Z��}i&j�Q��E:_,�_���.�M���f|O�ޑ�F����@m�O��$���n�B�W��Y��t/�H�Ў��(i�G���Bw�R�ZʕO���(��D���')��I�$����rE[��R@5ʿ�_��₫�����$hx2}$�X;$��?�L:�m5��G]�`U�����A�G�
(ry�x����慘WI��^}JV3�#�M��Հ�rC��a��N啪B�WYz)��5�V"��]��8�j�"�F,w�Pk���s!�s�L����h�5�椮v���k��%����˛e�p-.=�/��qŊ����n�o�e˯T�}��!Q�;ɍ5"C��:���M���5.m�X��0'\�r6�{�u�J<U�ň_%B$���0i�������G�DV����xͲi�j^l'�\BY��7��c(0e*'J3(+�ZK�b���W����Q&Fkk����Jľ#���[n"�C$�j�����\|���y�H~%�W����^��H���h��aķ`w�
@]����4_p�Hx�/p�GM����y��/${���_6�w`Gm�+wi|%Q������:���5������5�%�ouDG����^��P���Q�: �A<I�Z�s����Q{qM-
 ������]�(u�ݽL�{1F���U]��z$�m1Uɔ%��m	��WTD��o�F�9&��ب�G��l�l��68S�_4�w�}��-W�\�BX-��&�Kq����'حiS��ڨ����չ�Ӹ�xD�ֲ�C<���g1�=�3l}@����b��0�*xlB�Y�3Ao�iW�t�X �Hܴk���n7��	��>�#9��e�%���-J|q�%%G(��`���\m݄�+҆��0ɸ��߽e�S��+Jz�:H�	y-���L�,��.ݮ���!��}� 3�N)�����-�[�,� M%�U�^c샗?Q�%�a�
|"�k'V��E��y���|� ͯ�bٗ�n[�Ox+�OZDw�i"8(�:��K� �f�n�V�iz_j�3iE`#¯k_G�@�N�X���ފ���� �<͡g�fR��sPo{�$F�q�u�Djǂ�2�It�{�&�Xۭ������r�E�]�����tГ����h�� Q��+y �6���C�߀U���R; �\�6�m�߹s�➓��a�l7W���)��Mv{)��aD�ڢ� i�l���-?����m�P/�~VK" ���*�Z��������n�jД�t&�`X_���Zr�s��S{+y�5#>�i;���������<>�E�p�)lP�Hn�N˒ JA�.�/ |��+�2�"�;ږDeNV@e٭��:�]�Ɲ2)~4�Eê�A)�z������v��ߐ�Q�(��{]�����t��O�Cq��IPn��Y�4�Gh�!���P#����}��'�v����RФfr�$-��H���S�׮t,���z�sE��}�gW�D$y�����d��Jx��B/�F 8�]	���/�_��*$�53�i��U-�$�����V�5�
��Djyi����[�l�}g	2�� g�J-vI�;�&���\ᆫ�#U[����p����K��Y^qd������1�c�Wf5��!D��J^��i9y��I���t�׀�&D22�OfS�pB�^~=��^	&�}��^34I���+����U$�uo�j�Tl��J�g믵m`��m�\���ŕ��FAG��
+�����E�g	�P"�ׂ���h�\�/�]'���M6��u6馘��4��2Q0���@0�M������?W�E䩲�k �S��ɧč"*RqU3�m�o��a���M#A�}T{a���c��.��,'e���XYEY� �(;Wa��@V+)�|�������bKN�K��G����5� �J�(��T���G6���-D��d\��t嶎�c�R����)UE�"�/����gbC4W3��63hєu%�p1�&<��j<�D��$��
��R�w�;NEK�� Y�g�D¾2�z�A߱o��4���J����\,�bK �Z�d7�ZU��H";���i}c��HH���P���5b�K�Ƥ���E 9�'!�H�䗰WDn��.��ܡ���Φ]��`���!�E� 5�R_"O�+���_
5H�����W�U	C�/I���D�b�GwD_�f����*���%�Mv;�&.H<K<^�R�/P28���L0mu���|0_��t�4N������+-'�M�M���:��mP"t�;Y�6�WW7�M�Y����>V�l�>�%�a4�0��F�J��S�(ZY�pI���h�5DLaa8�|�;�cu!dW $�f�DE�W��Ϯ�v�'�|��~�]��2^����=2l�������䣊��$�qu�k"HlE)V8��'�ݞ�Mbվ�5�d�@,��Y���L_h\n�[^С/� ������E�$� r<)!�Q�3�2�FﾳȌB��R��j��V��b޹�Iu|�Q�T5���t�OG_w�����Ths(�j!q�*w�5��Д    �S��`O�«|�f�,�@Nz˻2&���)�(��N�a�d�z�]�:I'ocwPi��8����w}����,��?P��ɿ����b��r�R�w4J�⹓X�PȋzΝdAr\�L�M(?���V��� σ��X@y�2������ό �Y*�� �W��O��4j� \5G|�z�|�~U$���䵠�
��k�Ӿ�Z�.>+�$$����IZ��T,��b1CY�)�^�H|��k�X2�;�^c�b� Q.��%���+Ͱ�q0��\H�rcF5jBm~�-r�c��e���0Ϛ���T�H2XI���&��7V,&�Y����^�ʎU_��+�g�Uh��)�C�3CF�սYn�D���e��)O'�ZL���[Q��/v�	bND��<v�B&�H ;)��L
>��Q�V.g/yd7vE��J��uH�~tQn�}�5R_q5D��!v���\Y�U�_*Lr���Ɉ迯dW�p�W��;"�2�b�v���{��H^��Դ٭�L�[N�zp�q4�Qbq_�/�{y^��G�b'HuT�9hy��^dr_�u�'�b<���h7�Qp*�J��4C+Ѭ��R�"��!�s1;��w�l;��=ʠ�o���5�ϕ��X�E�<P>9�D��S+��K����3o(إ��ޖ���L�v��V������9LZ8�j��8�L־�F����a�G����w�ky�.�_f`�޴8�:n�V���ȞI�Jg�G�����Z��/�e0f��AYϲk}��v�z�JV[8��'f"��?���O��z�l���9ĕmxC$�����:N�����|7���UY�z��vZ&�$��L\(�-�%}1p�#]_4��"�I��QG��Q��́�*��?)+DjTt�~�|�}��Lf�H�r�3�R�QNN�i|�G�0�H�&+}7rP�Ds��N"сU�����f.q��7C�c�iۗ��3W����6l���2b~�.B��
e�;�pdg0F�sb�C��Ez�!�IKY���"![r��[��3K7�4�9��~��:����g�`��m�Z�dT��o���"�w�y��`�NL�l˲��A�Q��5����w�a�f��(j��Ugא���6���W��ذr(�ޒ?w������7�ml ����JK�.k�F�k�����6~�Dɢfd��D�䷍;�?C�l�nMo��/c��x[�����˷@�e��g��S��?T��{���w	�	�)��N�`/���a�Fۿ��4Ĝx\�4L�{��t�Q��Db��O�|>�H�~����3��~���hP[�[֧��H	ӎ�>pտ���]��x�M�RE�$�γSop�l�n��w�,X�@�7����
Bk;:k{�ۑ�D����-��� �X#P�!�,�x:�K��Bv�����$�M$��M�^���n���<I�H�����ˎ}��kk�����Hr���n��LO!n�ܿ��Kb�[���/�v	��xԛ
sh��n�G�m���!�%g�!g�#(tN$��[��C��^Q�`L �I�6D1�Q&���[��ZF�W��}RZ>��X쎦����ƸB�8�i�
切����AfLK����Tg>K�s�'pXJ795{ny�ގ*�NNY[��u�0�����s+I^\]�����ȭ,;>z0KB<��	ED�N����>��Ϩ��w�o坘Xe߰�s��S���L<�b�����d>5�1������f�#��T�]L�D�r�I�d'�|��Y�Qd����Ǐ���d�*wZ��
��,$�h^��I\��W�Z�6e,B����#�
U�v̑�|-��5�#,��9Xq�!h5�Q��������nKWk��"]+��KT����#�<�]�ʅX����>��>������X�[�_�%�.��W�����|�T$��X�?��l#cU���x$�K ݣ^(���l��6�pM���%���0�6�T�x M�Tޘ�I� �:=�g��~��z��N���r�@<����׎U���_#ū�x�^�H����J���0ED�v���8V;H<_O/ŭ�<��Fl�{��ȭ��Ѹ�o�f~�h���Ʋ/ȹl����q� 
y�{N�-�����������=�e�Z���_�Sܓ�<�͓oy��c�ôn�]G+��d�4A�ތv"6�ۖ݀qES���g�_�a�J�3"��+[��5����Ԕ��v�Y*�V1-�=�[��ËW`�|a�cN]�㓶�Bw�X��_����P�!s�,!�<����}��'�r�	���OKW�/�S6g=a U�$�!-���)W�V�k�N��g��1	���O��??��'�Q�Y�O=ڞjZ��e򵿝8�l��Ԓ��Ⱦ:�A5�9���W��+�N3te���b`J�zsI�ځ��M���e �*�/�S� ����p���6@!�]"U ][<5�3�"��E��]�^&0�e���/-��{Ig��U�u�ݴ*�_Z��WºO8�����p��t�]��qd�5L��{y��v��r���"/^6�"��P�O�#f3�8��V��|M_��X�xd�Na��o��  �j5��P�W�u�\Y�`�]�xEDp�!)�*�K��y�CĒذ�L�m�Q�q1c�|�X>��t�'���"��bK}��i�jS�q�)�*�6ް/�F��A��P)�:� 3���A���b�j�
",��|i� �d�-$��j�sd�����+:\��D.h3���B���`A]hʜ��5�p)>�O3},�\r����E�,���
{hx�s������lE|[�S��l�i�y߂�))��}�D�6��?����!��i`%�`��vє�S�Hl�ʙ�zD�@�����htk�ߵ1X��\VTj�8�t�l����<���$�{���&g��ב1��L_�(�ڵ�9�G�P�+���y0�T�A\iCW��1��/o��y	!�B��X���M�������?=�����,��e��k�üAF�\��&��bIs�Z�suw���pu��x���y]��w�<Yo&�U���� .s��D����{����?��	H)u��:0�P�O�BG����Z�^	[��j6�_�yG�_9�bc����IV?���}q	],�s�X ?���5ӧ{.R��Q"��P��J/�J7��5VZ����8�����C�Z�2��.(^�bK�)����?�S��,h�@N��=��L��@	��D����k<��ulD���jA;���6�T&)Y;p��8���_��G������C��*���qYh(���.f?4���]����w�`\�E:_͓	eG���0tj�r�S�h{:�#�f�Fb Õ�yiό_�����X��rm�10��2�e���l6��e�� P1��_�0���w>�N_�\����}��5#��9('	�
�96���~�~��lЧ�{g���\�<��@qdc �E��9�w����Vk�[����dŁNgK�g[�����ڵb����n�l:��iGX,�_G#p��Z#��
��Y�sֳ�K�ˬB�^��gJ�A�L�)���m�T�CL'gI	�J-������٩��˗�&��͍��K֢�fh"QQ�DT�e�����N˟V�h������t����|�;3��&/��ԩʊ�%ܜ��i��y3�~c(�qY�Hme�sy#��I-���aH�:뵶�cw���ݨ�N������5	N����|Ի�bStTx$���Z�4*�2I���$
CkZ�Y�";�ҩ8Ϛ���J���b��a\�� ����#խ;������q�{��OtYv�=�0
��T���:�C��t�|՗�Y���&Kd��{>�3{����d�8����a�e��$�Ai�6�G~�3X��,��jub1�0� y���{qMW�d?qW��@�xC��aU �W�~�a��x.� ��*	������a����f��!�@mN��y�2ĺ�� �t�>���Qv�V���J    ���/�U��[��Tv�!ڋ�J���9��1��Hi�-��~Hͽ���˚.��ae�ńl�ݏ��W����&(\�����L�A�X9AT�]�O�B�+����'^����tw� �5p5mP�������U���g"�����K� z	�
�ei������Ӧ|�����Cg�Zw�}�Jq��x��X�4��6�/q� Ep?5��8Q��_�=F4Qr�*3� S�w�C�ѢŦzm��*F��`cK�9z�:W�<�Oo��#���:J�E�qV��K���]�V��M�ǩ��G#�3�#�������^'�+�KSG	�w� O��GF��D��{L)��m���'#nN�=4 {���Z����U�|�D���2�˾+���!�O�VL�ރW'ii�|]L���H�ä�X�*yVk����?0�Qc]��[o�3�D��C
��Y�� n�2E�D<��]:3fH��9�N�p������Y3�t1��򭯜bL�ZI�����Q�k��L��s0&��>�FQ�a���1=x�]�n�I6��_3�������؀�K@O��ܶ���͹�@�	�D0�=Y��ن��;>/=n���^�P����C�%e!޳�Ǐ�L �N��P.���Χ��Ɍ6zb�ik|�sKZ4�h<�J�]����]�SoC�F���oC��p����V�+�O���^������=�w�\{9px���'w�lW��4�ڤ��>o �9�<�� n��.��I������Y�P���^0&+ҒH-*�Gs ~c��x)׊P�(�ߍ3
�X�T>D���+3�,���iL\�4��b��*���O���J�G��u4���]�b4�6��%>.ZL����}ČcV�P�c�}��`m,�'s튞4jY<"�����Q��Ej��K�wg�PiY� �߃7ͪl詑|<�u�p��A吃���g��B�ș=OT��� U{�K&w�6 ��~����M�`�Ӭ~D#ϳ5��.Ik�E��F�e_k����i,�b�.vɯt���Ԍ�H����ˇ�=Φz+�2���Esԁ��`%=��Ƒ�n�"��"]�o�$!H2����l���0W�1�$P��4Pv�<�4��糶j�]���x�\@�J�x,�� �!�%�5mӔ+6욼�����~�0u-N8�0�ZQ}|OH^	�{�᪩f�1���SX���\\Λ\����I;�F�q @�N�w7�rO|sǡm�x��-�jm�9DV-�~���0F6���}����1��:�쏮�0x���;+]�9��ײ�$�xȄ���;҃�^�:!�I?�W�%80��ڤ�e�=�����0��4�P��S�rp�;U�,���\�t0(�P�Ng4�6+%�p���]e ��x������p�#W��Al��J���ϐ��>o9gl4LE'/�u:b�U�g�>N�`��u�a~*7���1t�#: �]�\'�/�Јs�����_ñ�-���0%ގ�:J4���ÁU�NT��Cr	�ˀَ�!�f�N�!�v�壱9T�al:�h�k
���!`��ѽ�O�]G!�br#�~oKiD/Q4��r�|&VJ8s^�b��GÎ<�3ǲKߨ���?�h�ä���>b��I�?ɻ|��a(e�E����[�&��Y�6&q��P?ұ>G���sc�y�s]��rTL ��,+�Q��#�@I�K�y�0\p8���|�ܟ����r���y*��I���#�<ni��Ɗ��L'5���X�t�����Ok7֌[Gۍ3�o������z���׃�~����(�E����$��t;T*����#�(>f\��1�z�~��<9�E�ͭ�Ys��58����%Y�t��6�&�\�o8[됆?��CY-�Ռ�M:�f��mVg�c<�E�ÚT�s""]>vB��ǁxb�I�Bv��"�K�X�[r<}�T�׵`�i���M�]�YU�v�Z�8v�
��X��*�U��'�,��
��(M��MF��
�S�k���#C�A��_ʻ
��Nv.����ؙZ=L���8��QpZ��n��\����Y�`���XoF\����hx�~��<�tJȎ�����	�ť��6	�����Ֆ�t�L�ܗu���LӾ١Qj Ix2z
8�P?�[�%!`�bU�1s��c������2���������ܦ�����s�"L����G��������,����O
U*�s�|��ZkV/��9�t�J��8FQ�M�����:�bV����mg���z=�AZ��xak,��B��u����gW�0��?:����Di�(��}��&��\g�l��u5�Oy8J�nl�cj���i��d͗��qZ�H���0�����i:�[F�ȡ�A�sp �<]�0�����-;��A�@\����?����*�4�/j	�OL̑K6 �?���T��'� 6�r������w=���3u�74���I�qD?/z@����׆��3��8��뾉���݁�<���Z�/�2�1�D/�ُxD�ش�dP�Ƈ`�@1!���z�|+�&����H���#�2�PñU�X��_�nQ;enc	�sC2���1�+hC� T?c�Z�XI�<��_R��6�g �y�'Wv�*]ϓ?��K�)�"�7��4����=:	�4�y�.�$+�����G�	�aR��9�K6
��`���Ho�jW�i�R���R2-L�W����"���Dݞ�F_�G�dz�yk_��@t�x��\^�&c����Lr� �f:��u^��H�=G�j����`�Dn���Ĳ8ߣ���� ��|�{	)}^%Zz�H�˟�|V)<I4� ��zWּڦ�vp�'Z�����n��=5�9������wkE���%X�Ns�x��N��̠���@���}^湝C�|G/�a[.�@�uXh�1�B
m��7��Ź�]G�;�֢�ˡP�cjy���4�v��<*�<��ڞ�B����#0�
\k�"~����1^7o8pg�������Ñ�K���м��U�RӨx\"��Q�MD;b���ÔLt�� ���Gg2�E}���<]���p���"ElR�b=t��O<�M���4	�V^� N��+�Ol����+R�4�@�N��s%b�Sw�]�RԜ��.��,����}yC�6y��F`#HN���i���"��iɌ�H0K��VT���#��qL��W�f�1kX�VO��V��(P��v�����-CE�{�C���� �81[�T��Q�pI�S�Co�z�n�[��{��Mz�շ��y����2F���i�H��r��R$̳���UȎ�_���X��I7���&���]<ƫMm�vc�E^���<節%-F�����LY���)r�8�ޚ1WA�f-��Q����D�<�����Z��ɜ����z���8�p��X��P2���Giv�-�"�G#X���`�C��^��t�pӜ{�H�t�O7��0z���)�f6Į�3֊%��)�q�5h�}V0���V�94ċa��4��n��A�3��ʩ�(�Y�٩�vĪM�n���h}����s��@x2�����WJv;N,���('��8�Ǝ.`�'��l���}򥸇���yb�p��ͤ�n�p��1�Dޝ�Ac퓾I��u�at�<m�?htz6OI�@ ΢�8-�L����ҽ��5YM=�w�YGÎl�遗�������u��73@#�!O���G�|�����bY�M��*��I(�/�m����v%�3h�9��ny5��	��n$H~��i5ꫀr��s�gyi_�T)��W�5�hȟ���#�p��t����d��>c��~6�G��������@�뻂�Dm��NK���#n�yWK��F��x��t��4^$V$�����h�U15u�LD��/E�Tw����Z#kM��饸��`�F�� �c��ؗ5Hv"�({�I����N������-W���+�:6(eQo��v�+��a�4��l����'��kW��Mص#��(��A���a��� a   =Dl02He��8)Ɔ�o�-ZTrÿ�L>a�2��#�"äWj� �����yK�ޏ��v�{��J���PLS�<E�wm�S�ݬ�������[K�      �     x�M��n�7����"u�m���b6�1\#1&�۳����B���c���xv_���1���v}�>��(uQ(��@Y�r�_\�:�Dm�ػ�����k��}?=/wW�e��8�����:_\m�A�(�������m����ݗ����Z����^g�~F�"ϨR��!��F���Ʋx�&�C��L��2���G|�sP)�1۶��J��n��}��wzw�N[�:�e%��!X&R��$�$B;2��
��L�`+��� [}�vy�����r~ޯg�P�F�^�����_pg�A�lgek_Ȕ�A���7 S*���Q	
�S���ɽ���O�J�X���^7F*ց��z�s�v1SM �_.T�:$�T��2���(6�Vz���S����`jVx�ya�P��'��}M�Z�U��H�>�a�G�h���N�}L}������%\q�p�}Z3�= +`0|o���s8���1�^�C߽c�Pbޑ���{d�0�Ȑ��]g�����������a�2.��Z
�q;0��?0�I�@�3��Y Wl����n�f&��$���� u��2�� v_o矮��`G4(��6��ʠ�`C9hMEE�a�EE�AT����é�nj��w�����y��OH�$����ds��*��� �҆:�U�Am�t�� {lP*�rj�v݉�4� T���fb&��?0�*�LH�Ъrh&񸀞��P>�ݹXm�o�l�fBET���`v1CX���W�iLp�����0H��w���;�7��j+���G�ٌ�K�w��ya�@�b[2�֖� �#(m������W����-�+'~�c00�.0~���d��&c"����`$�w1���U�GP��f����Al�h7	/����q�{�N���5x����I^S���`arI`y���2�ؽ$��n�s5�b�4(k
���&UM�����1�;�GR`y�v���!<�G	q�;�U-I	y�:�����/8K���`8�!��~��#���R6��^��oD�?�f��      �   d   x�J�-���,J��,�w��/�M���K���T1JR14PI�Owt55(w.3	�q6tJu+L��4I�0��4�
Oҳ�sѷ,ӯ�,r����� �l�     