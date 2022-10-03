export  const mainFun =
    ";; =============== storage =============================\n" +
    // "\n" +
    // ";; storage binary format is defined as TL-B in companion .tlb file\n" +
    // "\n" +
    // "#pragma version >=0.2.0;\n" +
    // "\n" +
    // "#include \"imports/stdlib.fc\";\n" +
    // "#include \"imports/constants.fc\";\n" +
    // "#include \"imports/utils.fc\";\n" +
    // "\n" +
    // "(slice, int) load_data() inline {\n" +
    // "  var ds = get_data().begin_parse();\n" +
    // "  return (\n" +
    // "    ds~load_msg_addr(), ;; owner_address\n" +
    // "    ds~load_uint(64)    ;; counter\n" +
    // "  );\n" +
    // "}\n" +
    // "\n" +
    // "() save_data(slice owner_address, int counter) impure inline {\n" +
    // "  set_data(begin_cell()\n" +
    // "    .store_slice(owner_address)\n" +
    // "    .store_uint(counter, 64)\n" +
    // "    .end_cell());\n" +
    // "}\n" +
    // "\n" +
    // ";; =============== messages =============================\n" +
    // "\n" +
    // ";; message binary format is defined as TL-B in companion .tlb file\n" +
    // "\n" +
    // "() op_withdraw(int withdraw_amount, slice owner_address) impure;\n" +
    // "\n" +
    // "() recv_internal(int msg_value, cell in_msg, slice in_msg_body) impure {\n" +
    // "  ;; parse incoming internal message\n" +
    // "  slice cs = in_msg.begin_parse();\n" +
    // "  int flags = cs~load_uint(4); ;; int_msg_info$0 ihr_disabled:Bool bounce:Bool bounced:Bool\n" +
    // "  slice sender_address = cs~load_msg_addr();\n" +
    // "\n" +
    // "  ;; handle bounced messages\n" +
    // "  if (flags & 1) {\n" +
    // "    return (); ;; ignore\n" +
    // "  }\n" +
    // "\n" +
    // "  ;; load from contract storage\n" +
    // "  var (owner_address, counter) = load_data();\n" +
    // "\n" +
    // "  ;; handle operations\n" +
    // "  int op = in_msg_body~load_uint(32);\n" +
    // "  int query_id = in_msg_body~load_uint(64);\n" +
    // "  \n" +
    // "  if (op == op::increment) {\n" +
    // "    save_data(owner_address, counter + 1);\n" +
    // "    return ();\n" +
    // "  }\n" +
    // "\n" +
    // "  if (op == op::deposit) {\n" +
    // "    ;; empty since ton received (msg_value) is added automatically to contract balance\n" +
    // "    ;; ~dump msg_value; ;; an example of debug output, requires running contract in debug mode\n" +
    // "    return ();\n" +
    // "  }\n" +
    // "  \n" +
    // "  if (op == op::withdraw) {\n" +
    // "    throw_unless(error::access_denied, equal_slices(sender_address, owner_address));\n" +
    // "    int withdraw_amount = in_msg_body~load_coins();\n" +
    // "    op_withdraw(withdraw_amount, owner_address);\n" +
    // "    return ();\n" +
    // "  }\n" +
    // "\n" +
    // "  if (op == op::transfer_ownership) {\n" +
    // "    throw_unless(error::access_denied, equal_slices(sender_address, owner_address));\n" +
    // "    slice new_owner_address = in_msg_body~load_msg_addr();\n" +
    // "    save_data(new_owner_address, counter);\n" +
    // "    return ();\n" +
    // "  }\n" +
    // "\n" +
    // "  throw(error::unknown_op);\n" +
    // "}\n" +
    // "\n" +
    // "() op_withdraw(int withdraw_amount, slice owner_address) impure {\n" +
    // "  var [balance, _] = get_balance();\n" +
    // "  throw_unless(error::insufficient_balance, balance >= withdraw_amount);\n" +
    // "  int return_value = min(withdraw_amount, balance - const::min_tons_for_storage);\n" +
    // "  send_grams(owner_address, return_value);\n" +
    // "}\n" +
    // "\n" +
    // ";; =============== getters =============================\n" +
    // "\n" +
    // "int meaning_of_life() method_id {\n" +
    // "  return 42;\n" +
    // "}\n" +
    // "\n" +
    // "slice owner_address() method_id {\n" +
    // "  var (owner_address, _) = load_data();\n" +
    // "  return owner_address;\n" +
    // "}\n" +
    // "\n" +
    // "int counter() method_id {\n" +
    // "  var (_, counter) = load_data();\n" +
    // "  return counter;\n" +
    // "}\n" +
    // "\n" +
    // "int balance() method_id {\n" +
    // "  var [balance, _] = get_balance();\n" +
    // "  return balance;\n" +
    ""