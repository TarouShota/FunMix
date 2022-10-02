export const utils = "() send_grams(slice address, int amount) impure {\n" +
    "  cell msg = begin_cell()\n" +
    "    .store_uint (0x18, 6) ;; bounce\n" +
    "    .store_slice(address) ;; 267 bit address\n" +
    "    .store_grams(amount)\n" +
    "    .store_uint(0, 107) ;; 106 zeroes +  0 as an indicator that there is no cell with the data\n" +
    "    .end_cell(); \n" +
    "  send_raw_message(msg, 3); ;; mode, 2 for ignoring errors, 1 for sender pays fees, 64 for returning inbound message value\n" +
    "}\n"