/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface UpgradedFiatTokenContract
  extends Truffle.Contract<UpgradedFiatTokenInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<UpgradedFiatTokenInstance>;
}

export interface Mint {
  name: "Mint";
  args: {
    minter: string;
    to: string;
    amount: BN;
    0: string;
    1: string;
    2: BN;
  };
}

export interface Burn {
  name: "Burn";
  args: {
    burner: string;
    amount: BN;
    0: string;
    1: BN;
  };
}

export interface MinterConfigured {
  name: "MinterConfigured";
  args: {
    minter: string;
    minterAllowedAmount: BN;
    0: string;
    1: BN;
  };
}

export interface MinterRemoved {
  name: "MinterRemoved";
  args: {
    oldMinter: string;
    0: string;
  };
}

export interface MasterMinterChanged {
  name: "MasterMinterChanged";
  args: {
    newMasterMinter: string;
    0: string;
  };
}

export interface Blacklisted {
  name: "Blacklisted";
  args: {
    _account: string;
    0: string;
  };
}

export interface UnBlacklisted {
  name: "UnBlacklisted";
  args: {
    _account: string;
    0: string;
  };
}

export interface BlacklisterChanged {
  name: "BlacklisterChanged";
  args: {
    newBlacklister: string;
    0: string;
  };
}

export interface Pause {
  name: "Pause";
  args: {};
}

export interface Unpause {
  name: "Unpause";
  args: {};
}

export interface PauserChanged {
  name: "PauserChanged";
  args: {
    newAddress: string;
    0: string;
  };
}

export interface Approval {
  name: "Approval";
  args: {
    owner: string;
    spender: string;
    value: BN;
    0: string;
    1: string;
    2: BN;
  };
}

export interface OwnershipTransferred {
  name: "OwnershipTransferred";
  args: {
    previousOwner: string;
    newOwner: string;
    0: string;
    1: string;
  };
}

export interface Transfer {
  name: "Transfer";
  args: {
    from: string;
    to: string;
    value: BN;
    0: string;
    1: string;
    2: BN;
  };
}

type AllEvents =
  | Mint
  | Burn
  | MinterConfigured
  | MinterRemoved
  | MasterMinterChanged
  | Blacklisted
  | UnBlacklisted
  | BlacklisterChanged
  | Pause
  | Unpause
  | PauserChanged
  | Approval
  | OwnershipTransferred
  | Transfer;

export interface UpgradedFiatTokenInstance extends Truffle.ContractInstance {
  name(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Adds blacklisted check to approve
   * @returns True if the operation was successful.
   */
  approve: {
    (
      _spender: string,
      _value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _spender: string,
      _value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      _spender: string,
      _value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _spender: string,
      _value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Get totalSupply of token
   */
  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  /**
   * Removes account from blacklist
   * @param _account The address to remove from the blacklist
   */
  unBlacklist: {
    (_account: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Transfer tokens from one address to another.
   * @param _from address The address which you want to send tokens from
   * @param _to address The address which you want to transfer to
   * @param _value uint256 the amount of tokens to be transferred
   * @returns bool success
   */
  transferFrom: {
    (
      _from: string,
      _to: string,
      _value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _from: string,
      _to: string,
      _value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      _from: string,
      _to: string,
      _value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _from: string,
      _to: string,
      _value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Function to remove a minter
   * @param minter The address of the minter to remove
   * @returns True if the operation was successful.
   */
  removeMinter: {
    (minter: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      minter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      minter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      minter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  decimals(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  initialize: {
    (
      _name: string,
      _symbol: string,
      _currency: string,
      _decimals: number | BN | string,
      _masterMinter: string,
      _pauser: string,
      _blacklister: string,
      _owner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _name: string,
      _symbol: string,
      _currency: string,
      _decimals: number | BN | string,
      _masterMinter: string,
      _pauser: string,
      _blacklister: string,
      _owner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _name: string,
      _symbol: string,
      _currency: string,
      _decimals: number | BN | string,
      _masterMinter: string,
      _pauser: string,
      _blacklister: string,
      _owner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _name: string,
      _symbol: string,
      _currency: string,
      _decimals: number | BN | string,
      _masterMinter: string,
      _pauser: string,
      _blacklister: string,
      _owner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  masterMinter(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * called by the owner to unpause, returns to normal state
   */
  unpause: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  /**
   * Function to mint tokens
   * @param _amount The amount of tokens to mint. Must be less than or equal to the minterAllowance of the caller.
   * @param _to The address that will receive the minted tokens.
   * @returns A boolean that indicates if the operation was successful.
   */
  mint: {
    (
      _to: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _to: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      _to: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _to: string,
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * allows a minter to burn some of its own tokens Validates that caller is a minter and that sender is not blacklisted amount is less than or equal to the minter's account balance
   * @param _amount uint256 the amount of tokens to be burned
   */
  burn: {
    (
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _amount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Function to add/update a new minter
   * @param minter The address of the minter
   * @param minterAllowedAmount The minting amount allowed for the minter
   * @returns True if the operation was successful.
   */
  configureMinter: {
    (
      minter: string,
      minterAllowedAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      minter: string,
      minterAllowedAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      minter: string,
      minterAllowedAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      minter: string,
      minterAllowedAmount: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * update the pauser role
   */
  updatePauser: {
    (_newPauser: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _newPauser: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _newPauser: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _newPauser: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  paused(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

  /**
   * Get token balance of an account
   * @param account address The account
   */
  balanceOf(
    account: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * called by the owner to pause, triggers stopped state
   */
  pause: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  /**
   * Get minter allowance for an account
   * @param minter The address of the minter
   */
  minterAllowance(
    minter: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  /**
   * Tells the address of the owner
   * @returns the address of the owner
   */
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;

  pauser(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * transfer token for a specified address
   * @param _to The address to transfer to.
   * @param _value The amount to be transferred.
   * @returns bool success
   */
  transfer: {
    (
      _to: string,
      _value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _to: string,
      _value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      _to: string,
      _value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _to: string,
      _value: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  updateMasterMinter: {
    (_newMasterMinter: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _newMasterMinter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _newMasterMinter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _newMasterMinter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Checks if account is a minter
   * @param account The address to check
   */
  isMinter(
    account: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  updateBlacklister: {
    (_newBlacklister: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _newBlacklister: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _newBlacklister: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _newBlacklister: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  blacklister(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Get allowed amount for an account
   * @param owner address The account owner
   * @param spender address The account spender
   */
  allowance(
    owner: string,
    spender: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  currency(txDetails?: Truffle.TransactionDetails): Promise<string>;

  /**
   * Allows the current owner to transfer control of the contract to a newOwner.
   * @param newOwner The address to transfer ownership to.
   */
  transferOwnership: {
    (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Adds account to blacklist
   * @param _account The address to blacklist
   */
  blacklist: {
    (_account: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  /**
   * Checks if account is blacklisted
   * @param _account The address to check
   */
  isBlacklisted(
    _account: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  methods: {
    name(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Adds blacklisted check to approve
     * @returns True if the operation was successful.
     */
    approve: {
      (
        _spender: string,
        _value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _spender: string,
        _value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        _spender: string,
        _value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _spender: string,
        _value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Get totalSupply of token
     */
    totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    /**
     * Removes account from blacklist
     * @param _account The address to remove from the blacklist
     */
    unBlacklist: {
      (_account: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Transfer tokens from one address to another.
     * @param _from address The address which you want to send tokens from
     * @param _to address The address which you want to transfer to
     * @param _value uint256 the amount of tokens to be transferred
     * @returns bool success
     */
    transferFrom: {
      (
        _from: string,
        _to: string,
        _value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _from: string,
        _to: string,
        _value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        _from: string,
        _to: string,
        _value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _from: string,
        _to: string,
        _value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Function to remove a minter
     * @param minter The address of the minter to remove
     * @returns True if the operation was successful.
     */
    removeMinter: {
      (minter: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        minter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        minter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        minter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    decimals(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    initialize: {
      (
        _name: string,
        _symbol: string,
        _currency: string,
        _decimals: number | BN | string,
        _masterMinter: string,
        _pauser: string,
        _blacklister: string,
        _owner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _name: string,
        _symbol: string,
        _currency: string,
        _decimals: number | BN | string,
        _masterMinter: string,
        _pauser: string,
        _blacklister: string,
        _owner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _name: string,
        _symbol: string,
        _currency: string,
        _decimals: number | BN | string,
        _masterMinter: string,
        _pauser: string,
        _blacklister: string,
        _owner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _name: string,
        _symbol: string,
        _currency: string,
        _decimals: number | BN | string,
        _masterMinter: string,
        _pauser: string,
        _blacklister: string,
        _owner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    masterMinter(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * called by the owner to unpause, returns to normal state
     */
    unpause: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    /**
     * Function to mint tokens
     * @param _amount The amount of tokens to mint. Must be less than or equal to the minterAllowance of the caller.
     * @param _to The address that will receive the minted tokens.
     * @returns A boolean that indicates if the operation was successful.
     */
    mint: {
      (
        _to: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _to: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        _to: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _to: string,
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * allows a minter to burn some of its own tokens Validates that caller is a minter and that sender is not blacklisted amount is less than or equal to the minter's account balance
     * @param _amount uint256 the amount of tokens to be burned
     */
    burn: {
      (
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _amount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Function to add/update a new minter
     * @param minter The address of the minter
     * @param minterAllowedAmount The minting amount allowed for the minter
     * @returns True if the operation was successful.
     */
    configureMinter: {
      (
        minter: string,
        minterAllowedAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        minter: string,
        minterAllowedAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        minter: string,
        minterAllowedAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        minter: string,
        minterAllowedAmount: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * update the pauser role
     */
    updatePauser: {
      (_newPauser: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _newPauser: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _newPauser: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _newPauser: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    paused(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

    /**
     * Get token balance of an account
     * @param account address The account
     */
    balanceOf(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * called by the owner to pause, triggers stopped state
     */
    pause: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    /**
     * Get minter allowance for an account
     * @param minter The address of the minter
     */
    minterAllowance(
      minter: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    /**
     * Tells the address of the owner
     * @returns the address of the owner
     */
    owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

    symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;

    pauser(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * transfer token for a specified address
     * @param _to The address to transfer to.
     * @param _value The amount to be transferred.
     * @returns bool success
     */
    transfer: {
      (
        _to: string,
        _value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _to: string,
        _value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<boolean>;
      sendTransaction(
        _to: string,
        _value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _to: string,
        _value: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    updateMasterMinter: {
      (
        _newMasterMinter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _newMasterMinter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _newMasterMinter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _newMasterMinter: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Checks if account is a minter
     * @param account The address to check
     */
    isMinter(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    updateBlacklister: {
      (
        _newBlacklister: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _newBlacklister: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _newBlacklister: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _newBlacklister: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    blacklister(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Get allowed amount for an account
     * @param owner address The account owner
     * @param spender address The account spender
     */
    allowance(
      owner: string,
      spender: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    currency(txDetails?: Truffle.TransactionDetails): Promise<string>;

    /**
     * Allows the current owner to transfer control of the contract to a newOwner.
     * @param newOwner The address to transfer ownership to.
     */
    transferOwnership: {
      (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Adds account to blacklist
     * @param _account The address to blacklist
     */
    blacklist: {
      (_account: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    /**
     * Checks if account is blacklisted
     * @param _account The address to check
     */
    isBlacklisted(
      _account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
