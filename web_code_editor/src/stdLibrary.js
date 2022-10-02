export const library = "" +
    ";; Standard library for funC" +
    "forall X -> tuple cons(X head, tuple tail) asm \"CONS\";\n" +
    "forall X -> (X, tuple) uncons(tuple list) asm \"UNCONS\";\n" +
    "forall X -> (tuple, X) list_next(tuple list) asm( -> 1 0) \"UNCONS\";\n" +
    "forall X -> X car(tuple list) asm \"CAR\";\n" +
    "tuple cdr(tuple list) asm \"CDR\";\n" +
    "tuple empty_tuple() asm \"NIL\";\n" +
    "forall X -> tuple tpush(tuple t, X value) asm \"TPUSH\";\n" +
    "forall X -> (tuple, ()) ~tpush(tuple t, X value) asm \"TPUSH\";\n" +
    "forall X -> [X] single(X x) asm \"SINGLE\";\n" +
    "forall X -> X unsingle([X] t) asm \"UNSINGLE\";\n" +
    "forall X, Y -> [X, Y] pair(X x, Y y) asm \"PAIR\";\n" +
    "forall X, Y -> (X, Y) unpair([X, Y] t) asm \"UNPAIR\";\n" +
    "forall X, Y, Z -> [X, Y, Z] triple(X x, Y y, Z z) asm \"TRIPLE\";\n" +
    "forall X, Y, Z -> (X, Y, Z) untriple([X, Y, Z] t) asm \"UNTRIPLE\";\n" +
    "forall X, Y, Z, W -> [X, Y, Z, W] tuple4(X x, Y y, Z z, W w) asm \"4 TUPLE\";\n" +
    "forall X, Y, Z, W -> (X, Y, Z, W) untuple4([X, Y, Z, W] t) asm \"4 UNTUPLE\";\n" +
    "forall X -> X first(tuple t) asm \"FIRST\";\n" +
    "forall X -> X second(tuple t) asm \"SECOND\";\n" +
    "forall X -> X third(tuple t) asm \"THIRD\";\n" +
    "forall X -> X fourth(tuple t) asm \"3 INDEX\";\n" +
    "forall X, Y -> X pair_first([X, Y] p) asm \"FIRST\";\n" +
    "forall X, Y -> Y pair_second([X, Y] p) asm \"SECOND\";\n" +
    "forall X, Y, Z -> X triple_first([X, Y, Z] p) asm \"FIRST\";\n" +
    "forall X, Y, Z -> Y triple_second([X, Y, Z] p) asm \"SECOND\";\n" +
    "forall X, Y, Z -> Z triple_third([X, Y, Z] p) asm \"THIRD\";\n" +
    "forall X -> X null() asm \"PUSHNULL\";\n" +
    "forall X -> (X, ()) ~impure_touch(X x) impure asm \"NOP\";\n" +
    "\n" +
    "int now() asm \"NOW\";\n" +
    "slice my_address() asm \"MYADDR\";\n" +
    "[int, cell] get_balance() asm \"BALANCE\";\n" +
    "int cur_lt() asm \"LTIME\";\n" +
    "int block_lt() asm \"BLOCKLT\";\n" +
    "\n" +
    "int cell_hash(cell c) asm \"HASHCU\";\n" +
    "int slice_hash(slice s) asm \"HASHSU\";\n" +
    "int string_hash(slice s) asm \"SHA256U\";\n" +
    "\n" +
    "int check_signature(int hash, slice signature, int public_key) asm \"CHKSIGNU\";\n" +
    "int check_data_signature(slice data, slice signature, int public_key) asm \"CHKSIGNS\";\n" +
    "\n" +
    "(int, int, int) compute_data_size(cell c, int max_cells) impure asm \"CDATASIZE\";\n" +
    "(int, int, int) slice_compute_data_size(slice s, int max_cells) impure asm \"SDATASIZE\";\n" +
    "(int, int, int, int) compute_data_size?(cell c, int max_cells) asm \"CDATASIZEQ NULLSWAPIFNOT2 NULLSWAPIFNOT\";\n" +
    "(int, int, int, int) slice_compute_data_size?(cell c, int max_cells) asm \"SDATASIZEQ NULLSWAPIFNOT2 NULLSWAPIFNOT\";\n" +
    "\n" +
    ";; () throw_if(int excno, int cond) impure asm \"THROWARGIF\";\n" +
    "\n" +
    "() dump_stack() impure asm \"DUMPSTK\";\n" +
    "\n" +
    "cell get_data() asm \"c4 PUSH\";\n" +
    "() set_data(cell c) impure asm \"c4 POP\";\n" +
    "cont get_c3() impure asm \"c3 PUSH\";\n" +
    "() set_c3(cont c) impure asm \"c3 POP\";\n" +
    "cont bless(slice s) impure asm \"BLESS\";\n" +
    "\n" +
    "() accept_message() impure asm \"ACCEPT\";\n" +
    "() set_gas_limit(int limit) impure asm \"SETGASLIMIT\";\n" +
    "() commit() impure asm \"COMMIT\";\n" +
    "() buy_gas(int gram) impure asm \"BUYGAS\";\n" +
    "\n" +
    "int min(int x, int y) asm \"MIN\";\n" +
    "int max(int x, int y) asm \"MAX\";\n" +
    "(int, int) minmax(int x, int y) asm \"MINMAX\";\n" +
    "int abs(int x) asm \"ABS\";\n" +
    "\n" +
    "slice begin_parse(cell c) asm \"CTOS\";\n" +
    "() end_parse(slice s) impure asm \"ENDS\";\n" +
    "(slice, cell) load_ref(slice s) asm( -> 1 0) \"LDREF\";\n" +
    "cell preload_ref(slice s) asm \"PLDREF\";\n" +
    ";; (slice, int) ~load_int(slice s, int len) asm(s len -> 1 0) \"LDIX\";\n" +
    ";; (slice, int) ~load_uint(slice s, int len) asm( -> 1 0) \"LDUX\";\n" +
    ";; int preload_int(slice s, int len) asm \"PLDIX\";\n" +
    ";; int preload_uint(slice s, int len) asm \"PLDUX\";\n" +
    ";; (slice, slice) load_bits(slice s, int len) asm(s len -> 1 0) \"LDSLICEX\";\n" +
    ";; slice preload_bits(slice s, int len) asm \"PLDSLICEX\";\n" +
    "(slice, int) load_grams(slice s) asm( -> 1 0) \"LDGRAMS\";\n" +
    "slice skip_bits(slice s, int len) asm \"SDSKIPFIRST\";\n" +
    "(slice, ()) ~skip_bits(slice s, int len) asm \"SDSKIPFIRST\";\n" +
    "slice first_bits(slice s, int len) asm \"SDCUTFIRST\";\n" +
    "slice skip_last_bits(slice s, int len) asm \"SDSKIPLAST\";\n" +
    "(slice, ()) ~skip_last_bits(slice s, int len) asm \"SDSKIPLAST\";\n" +
    "slice slice_last(slice s, int len) asm \"SDCUTLAST\";\n" +
    "(slice, cell) load_dict(slice s) asm( -> 1 0) \"LDDICT\";\n" +
    "cell preload_dict(slice s) asm \"PLDDICT\";\n" +
    "slice skip_dict(slice s) asm \"SKIPDICT\";\n" +
    "\n" +
    "(slice, cell) load_maybe_ref(slice s) asm( -> 1 0) \"LDOPTREF\";\n" +
    "cell preload_maybe_ref(slice s) asm \"PLDOPTREF\";\n" +
    "builder store_maybe_ref(builder b, cell c) asm(c b) \"STOPTREF\";\n" +
    "\n" +
    "int cell_depth(cell c) asm \"CDEPTH\";\n" +
    "\n" +
    "int slice_refs(slice s) asm \"SREFS\";\n" +
    "int slice_bits(slice s) asm \"SBITS\";\n" +
    "(int, int) slice_bits_refs(slice s) asm \"SBITREFS\";\n" +
    "int slice_empty?(slice s) asm \"SEMPTY\";\n" +
    "int slice_data_empty?(slice s) asm \"SDEMPTY\";\n" +
    "int slice_refs_empty?(slice s) asm \"SREMPTY\";\n" +
    "int slice_depth(slice s) asm \"SDEPTH\";\n" +
    "\n" +
    "int builder_refs(builder b) asm \"BREFS\";\n" +
    "int builder_bits(builder b) asm \"BBITS\";\n" +
    "int builder_depth(builder b) asm \"BDEPTH\";\n" +
    "\n" +
    "builder begin_cell() asm \"NEWC\";\n" +
    "cell end_cell(builder b) asm \"ENDC\";\n" +
    "builder store_ref(builder b, cell c) asm(c b) \"STREF\";\n" +
    ";; builder store_uint(builder b, int x, int len) asm(x b len) \"STUX\";\n" +
    ";; builder store_int(builder b, int x, int len) asm(x b len) \"STIX\";\n" +
    "builder store_slice(builder b, slice s) asm \"STSLICER\";\n" +
    "builder store_grams(builder b, int x) asm \"STGRAMS\";\n" +
    "builder store_dict(builder b, cell c) asm(c b) \"STDICT\";\n" +
    "\n" +
    "(slice, slice) load_msg_addr(slice s) asm( -> 1 0) \"LDMSGADDR\";\n" +
    "tuple parse_addr(slice s) asm \"PARSEMSGADDR\";\n" +
    "(int, int) parse_std_addr(slice s) asm \"REWRITESTDADDR\";\n" +
    "(int, slice) parse_var_addr(slice s) asm \"REWRITEVARADDR\";\n" +
    "\n" +
    "cell idict_set_ref(cell dict, int key_len, int index, cell value) asm(value index dict key_len) \"DICTISETREF\";\n" +
    "(cell, ()) ~idict_set_ref(cell dict, int key_len, int index, cell value) asm(value index dict key_len) \"DICTISETREF\";\n" +
    "cell udict_set_ref(cell dict, int key_len, int index, cell value) asm(value index dict key_len) \"DICTUSETREF\";\n" +
    "(cell, ()) ~udict_set_ref(cell dict, int key_len, int index, cell value) asm(value index dict key_len) \"DICTUSETREF\";\n" +
    "cell idict_get_ref(cell dict, int key_len, int index) asm(index dict key_len) \"DICTIGETOPTREF\";\n" +
    "(cell, int) idict_get_ref?(cell dict, int key_len, int index) asm(index dict key_len) \"DICTIGETREF\";\n" +
    "(cell, int) udict_get_ref?(cell dict, int key_len, int index) asm(index dict key_len) \"DICTUGETREF\";\n" +
    "(cell, cell) idict_set_get_ref(cell dict, int key_len, int index, cell value) asm(value index dict key_len) \"DICTISETGETOPTREF\";\n" +
    "(cell, cell) udict_set_get_ref(cell dict, int key_len, int index, cell value) asm(value index dict key_len) \"DICTUSETGETOPTREF\";\n" +
    "(cell, int) idict_delete?(cell dict, int key_len, int index) asm(index dict key_len) \"DICTIDEL\";\n" +
    "(cell, int) udict_delete?(cell dict, int key_len, int index) asm(index dict key_len) \"DICTUDEL\";\n" +
    "(slice, int) idict_get?(cell dict, int key_len, int index) asm(index dict key_len) \"DICTIGET\" \"NULLSWAPIFNOT\";\n" +
    "(slice, int) udict_get?(cell dict, int key_len, int index) asm(index dict key_len) \"DICTUGET\" \"NULLSWAPIFNOT\";\n" +
    "(cell, slice, int) idict_delete_get?(cell dict, int key_len, int index) asm(index dict key_len) \"DICTIDELGET\" \"NULLSWAPIFNOT\";\n" +
    "(cell, slice, int) udict_delete_get?(cell dict, int key_len, int index) asm(index dict key_len) \"DICTUDELGET\" \"NULLSWAPIFNOT\";\n" +
    "(cell, (slice, int)) ~idict_delete_get?(cell dict, int key_len, int index) asm(index dict key_len) \"DICTIDELGET\" \"NULLSWAPIFNOT\";\n" +
    "(cell, (slice, int)) ~udict_delete_get?(cell dict, int key_len, int index) asm(index dict key_len) \"DICTUDELGET\" \"NULLSWAPIFNOT\";\n" +
    "cell udict_set(cell dict, int key_len, int index, slice value) asm(value index dict key_len) \"DICTUSET\";\n" +
    "(cell, ()) ~udict_set(cell dict, int key_len, int index, slice value) asm(value index dict key_len) \"DICTUSET\";\n" +
    "cell idict_set(cell dict, int key_len, int index, slice value) asm(value index dict key_len) \"DICTISET\";\n" +
    "(cell, ()) ~idict_set(cell dict, int key_len, int index, slice value) asm(value index dict key_len) \"DICTISET\";\n" +
    "cell dict_set(cell dict, int key_len, slice index, slice value) asm(value index dict key_len) \"DICTSET\";\n" +
    "(cell, ()) ~dict_set(cell dict, int key_len, slice index, slice value) asm(value index dict key_len) \"DICTSET\";\n" +
    "(cell, int) udict_add?(cell dict, int key_len, int index, slice value) asm(value index dict key_len) \"DICTUADD\";\n" +
    "(cell, int) udict_replace?(cell dict, int key_len, int index, slice value) asm(value index dict key_len) \"DICTUREPLACE\";\n" +
    "(cell, int) idict_add?(cell dict, int key_len, int index, slice value) asm(value index dict key_len) \"DICTIADD\";\n" +
    "(cell, int) idict_replace?(cell dict, int key_len, int index, slice value) asm(value index dict key_len) \"DICTIREPLACE\";\n" +
    "cell udict_set_builder(cell dict, int key_len, int index, builder value) asm(value index dict key_len) \"DICTUSETB\";\n" +
    "(cell, ()) ~udict_set_builder(cell dict, int key_len, int index, builder value) asm(value index dict key_len) \"DICTUSETB\";\n" +
    "cell idict_set_builder(cell dict, int key_len, int index, builder value) asm(value index dict key_len) \"DICTISETB\";\n" +
    "(cell, ()) ~idict_set_builder(cell dict, int key_len, int index, builder value) asm(value index dict key_len) \"DICTISETB\";\n" +
    "cell dict_set_builder(cell dict, int key_len, slice index, builder value) asm(value index dict key_len) \"DICTSETB\";\n" +
    "(cell, ()) ~dict_set_builder(cell dict, int key_len, slice index, builder value) asm(value index dict key_len) \"DICTSETB\";\n" +
    "(cell, int) udict_add_builder?(cell dict, int key_len, int index, builder value) asm(value index dict key_len) \"DICTUADDB\";\n" +
    "(cell, int) udict_replace_builder?(cell dict, int key_len, int index, builder value) asm(value index dict key_len) \"DICTUREPLACEB\";\n" +
    "(cell, int) idict_add_builder?(cell dict, int key_len, int index, builder value) asm(value index dict key_len) \"DICTIADDB\";\n" +
    "(cell, int) idict_replace_builder?(cell dict, int key_len, int index, builder value) asm(value index dict key_len) \"DICTIREPLACEB\";\n" +
    "(cell, int, slice, int) udict_delete_get_min(cell dict, int key_len) asm(-> 0 2 1 3) \"DICTUREMMIN\" \"NULLSWAPIFNOT2\";\n" +
    "(cell, (int, slice, int)) ~udict::delete_get_min(cell dict, int key_len) asm(-> 0 2 1 3) \"DICTUREMMIN\" \"NULLSWAPIFNOT2\";\n" +
    "(cell, int, slice, int) idict_delete_get_min(cell dict, int key_len) asm(-> 0 2 1 3) \"DICTIREMMIN\" \"NULLSWAPIFNOT2\";\n" +
    "(cell, (int, slice, int)) ~idict::delete_get_min(cell dict, int key_len) asm(-> 0 2 1 3) \"DICTIREMMIN\" \"NULLSWAPIFNOT2\";\n" +
    "(cell, slice, slice, int) dict_delete_get_min(cell dict, int key_len) asm(-> 0 2 1 3) \"DICTREMMIN\" \"NULLSWAPIFNOT2\";\n" +
    "(cell, (slice, slice, int)) ~dict::delete_get_min(cell dict, int key_len) asm(-> 0 2 1 3) \"DICTREMMIN\" \"NULLSWAPIFNOT2\";\n" +
    "(cell, int, slice, int) udict_delete_get_max(cell dict, int key_len) asm(-> 0 2 1 3) \"DICTUREMMAX\" \"NULLSWAPIFNOT2\";\n" +
    "(cell, (int, slice, int)) ~udict::delete_get_max(cell dict, int key_len) asm(-> 0 2 1 3) \"DICTUREMMAX\" \"NULLSWAPIFNOT2\";\n" +
    "(cell, int, slice, int) idict_delete_get_max(cell dict, int key_len) asm(-> 0 2 1 3) \"DICTIREMMAX\" \"NULLSWAPIFNOT2\";\n" +
    "(cell, (int, slice, int)) ~idict::delete_get_max(cell dict, int key_len) asm(-> 0 2 1 3) \"DICTIREMMAX\" \"NULLSWAPIFNOT2\";\n" +
    "(cell, slice, slice, int) dict_delete_get_max(cell dict, int key_len) asm(-> 0 2 1 3) \"DICTREMMAX\" \"NULLSWAPIFNOT2\";\n" +
    "(cell, (slice, slice, int)) ~dict::delete_get_max(cell dict, int key_len) asm(-> 0 2 1 3) \"DICTREMMAX\" \"NULLSWAPIFNOT2\";\n" +
    "(int, slice, int) udict_get_min?(cell dict, int key_len) asm (-> 1 0 2) \"DICTUMIN\" \"NULLSWAPIFNOT2\";\n" +
    "(int, slice, int) udict_get_max?(cell dict, int key_len) asm (-> 1 0 2) \"DICTUMAX\" \"NULLSWAPIFNOT2\";\n" +
    "(int, cell, int) udict_get_min_ref?(cell dict, int key_len) asm (-> 1 0 2) \"DICTUMINREF\" \"NULLSWAPIFNOT2\";\n" +
    "(int, cell, int) udict_get_max_ref?(cell dict, int key_len) asm (-> 1 0 2) \"DICTUMAXREF\" \"NULLSWAPIFNOT2\";\n" +
    "(int, slice, int) idict_get_min?(cell dict, int key_len) asm (-> 1 0 2) \"DICTIMIN\" \"NULLSWAPIFNOT2\";\n" +
    "(int, slice, int) idict_get_max?(cell dict, int key_len) asm (-> 1 0 2) \"DICTIMAX\" \"NULLSWAPIFNOT2\";\n" +
    "(int, cell, int) idict_get_min_ref?(cell dict, int key_len) asm (-> 1 0 2) \"DICTIMINREF\" \"NULLSWAPIFNOT2\";\n" +
    "(int, cell, int) idict_get_max_ref?(cell dict, int key_len) asm (-> 1 0 2) \"DICTIMAXREF\" \"NULLSWAPIFNOT2\";\n" +
    "(int, slice, int) udict_get_next?(cell dict, int key_len, int pivot) asm(pivot dict key_len -> 1 0 2) \"DICTUGETNEXT\" \"NULLSWAPIFNOT2\";\n" +
    "(int, slice, int) udict_get_nexteq?(cell dict, int key_len, int pivot) asm(pivot dict key_len -> 1 0 2) \"DICTUGETNEXTEQ\" \"NULLSWAPIFNOT2\";\n" +
    "(int, slice, int) udict_get_prev?(cell dict, int key_len, int pivot) asm(pivot dict key_len -> 1 0 2) \"DICTUGETPREV\" \"NULLSWAPIFNOT2\";\n" +
    "(int, slice, int) udict_get_preveq?(cell dict, int key_len, int pivot) asm(pivot dict key_len -> 1 0 2) \"DICTUGETPREVEQ\" \"NULLSWAPIFNOT2\";\n" +
    "(int, slice, int) idict_get_next?(cell dict, int key_len, int pivot) asm(pivot dict key_len -> 1 0 2) \"DICTIGETNEXT\" \"NULLSWAPIFNOT2\";\n" +
    "(int, slice, int) idict_get_nexteq?(cell dict, int key_len, int pivot) asm(pivot dict key_len -> 1 0 2) \"DICTIGETNEXTEQ\" \"NULLSWAPIFNOT2\";\n" +
    "(int, slice, int) idict_get_prev?(cell dict, int key_len, int pivot) asm(pivot dict key_len -> 1 0 2) \"DICTIGETPREV\" \"NULLSWAPIFNOT2\";\n" +
    "(int, slice, int) idict_get_preveq?(cell dict, int key_len, int pivot) asm(pivot dict key_len -> 1 0 2) \"DICTIGETPREVEQ\" \"NULLSWAPIFNOT2\";\n" +
    "cell new_dict() asm \"NEWDICT\";\n" +
    "int dict_empty?(cell c) asm \"DICTEMPTY\";\n" +
    "\n" +
    "(slice, slice, slice, int) pfxdict_get?(cell dict, int key_len, slice key) asm(key dict key_len) \"PFXDICTGETQ\" \"NULLSWAPIFNOT2\";\n" +
    "(cell, int) pfxdict_set?(cell dict, int key_len, slice key, slice value) asm(value key dict key_len) \"PFXDICTSET\";\n" +
    "(cell, int) pfxdict_delete?(cell dict, int key_len, slice key) asm(key dict key_len) \"PFXDICTDEL\";\n" +
    "\n" +
    "cell config_param(int x) asm \"CONFIGOPTPARAM\";\n" +
    "int cell_null?(cell c) asm \"ISNULL\";\n" +
    "\n" +
    "() raw_reserve(int amount, int mode) impure asm \"RAWRESERVE\";\n" +
    "() raw_reserve_extra(int amount, cell extra_amount, int mode) impure asm \"RAWRESERVEX\";\n" +
    "() send_raw_message(cell msg, int mode) impure asm \"SENDRAWMSG\";\n" +
    "() set_code(cell new_code) impure asm \"SETCODE\";\n" +
    "\n" +
    "int random() impure asm \"RANDU256\";\n" +
    "int rand(int range) impure asm \"RAND\";\n" +
    "int get_seed() impure asm \"RANDSEED\";\n" +
    "int set_seed() impure asm \"SETRAND\";\n" +
    "() randomize(int x) impure asm \"ADDRAND\";\n" +
    "() randomize_lt() impure asm \"LTIME\" \"ADDRAND\";\n" +
    "\n" +
    "builder store_coins(builder b, int x) asm \"STVARUINT16\";\n" +
    "(slice, int) load_coins(slice s) asm( -> 1 0) \"LDVARUINT16\";\n" +
    "\n" +
    "int equal_slices (slice a, slice b) asm \"SDEQ\";\n" +
    "int builder_null?(builder b) asm \"ISNULL\";\n" +
    "builder store_builder(builder to, builder from) asm \"STBR\";\n"